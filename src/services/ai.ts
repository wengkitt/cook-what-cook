import { HfInference } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an malaysian assistant that receives a list of ingredients that a user has and suggests a malaysian food recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;

const client = new HfInference("");

export async function getRecipeFromDeepSeek(ingredientList: string[]) {
  const ingredientsString = ingredientList.join(", ");
  try {
    const response = await client.chatCompletion({
      model: "deepseek-ai/DeepSeek-V3",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      provider: "together",
      max_tokens: 500,
    });
    return response.choices[0].message.content;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error("An unknown error occurred");
    }
  }
}
