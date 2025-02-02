import { CookingPot, Plus, X } from "lucide-react";
import { useState } from "react";

type IngredientManagerProps = {
  ingredientList: string[];
  setIngredientList: (newIngredientList: string[]) => void;
  getRecipe: () => void;
  loading: boolean;
};

function IngredientManager({
  ingredientList,
  setIngredientList,
  getRecipe,
  loading,
}: IngredientManagerProps) {
  const [ingredient, setIngredient] = useState<string>("");

  function addIngredient() {
    if (ingredient.trim() !== "") {
      setIngredientList([...ingredientList, ingredient]);
      setIngredient("");
    }
  }

  function removeIngredient(index: number) {
    setIngredientList(ingredientList.filter((_, i) => i !== index));
  }

  function renderListItem() {
    return ingredientList.map((item, index) => (
      <li className="list-row justify-center items-center" key={index}>
        <div className="tabular-nums">{index + 1}.</div>
        <div className="list-col-grow">
          <div>{item}</div>
        </div>
        <button
          className="btn btn-square btn-ghost"
          onClick={() => removeIngredient(index)}
        >
          <X size={16} />
        </button>
      </li>
    ));
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="card bg-base-100 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">What ingredient do you have?</h2>
            <input
              type="text"
              placeholder="Enter ingredient name..."
              className="input"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
            />
            <div className="card-actions justify-end">
              <button
                className="btn btn-sm btn-primary"
                onClick={addIngredient}
                disabled={loading}
              >
                <Plus size={16} />
                Add Ingredient
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm mt-5">
          <div className="card-body">
            <div className="flex flex-row justify-between">
              <h2 className="card-title">Ingredient List</h2>
              {ingredientList.length != 0 && (
                <button
                  className="btn btn-sm btn-primary"
                  onClick={getRecipe}
                  disabled={loading}
                >
                  <CookingPot size={16} />
                  Get Recipe
                </button>
              )}
            </div>

            {ingredientList.length == 0 ? (
              <>
                <span className="text-center p-4">
                  Ingredient List is empty...
                </span>
              </>
            ) : (
              <ul className="list bg-base-100">{renderListItem()}</ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default IngredientManager;
