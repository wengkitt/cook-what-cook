import { useState } from "react";
import IngredientManager from "./components/ingredient-manager";
import Navbar from "./components/navbar";
import Recipe from "./components/recipe";
import { getRecipeFromDeepSeek } from "./services/ai";

function App() {
  const [ingredientList, setIngredientList] = useState<string[]>([]);
  const [recipe, setRecipe] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function getRecipe() {
    if (ingredientList.length == 0) {
      return;
    }

    setLoading(true);
    const message = await getRecipeFromDeepSeek(ingredientList);

    if (message) {
      setRecipe(message);
      setIngredientList([]);
      setLoading(false);
    }
  }

  return (
    <div className="h-full">
      <Navbar />
      <div className="flex flex-row gap-10 pt-10  justify-center px-40">
        <div className="w-[50%] h-full">
          <IngredientManager
            setIngredientList={setIngredientList}
            ingredientList={ingredientList}
            getRecipe={getRecipe}
            loading={loading}
          />
        </div>
        <div className="w-[50%] h-[30em] overflow-auto">
          <Recipe recipe={recipe} loading={loading}></Recipe>
        </div>
      </div>
    </div>
  );
}

export default App;
