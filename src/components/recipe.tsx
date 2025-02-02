import Markdown from "react-markdown";

type RecipeProps = {
  recipe: string;
  loading: boolean;
};

function Recipe({ recipe, loading }: RecipeProps) {
  if (loading) {
    return <div>The chef is thinking about what to prepare...</div>;
  }

  return (
    <>
      {recipe != "" ? (
        <>
          <h1 className="font-bold">Recipe:</h1>{" "}
          <Markdown className="markdown">{recipe}</Markdown>
        </>
      ) : (
        <h1>Add ingredient to start generate recipe from our chef!</h1>
      )}
    </>
  );
}

export default Recipe;
