import { Plus, X } from "lucide-react";
import { useState } from "react";

function IngredientManager() {
  const [ingredient, setIngredient] = useState<string>("");
  const [ingredientList, setIngredientList] = useState<string[]>([]);

  function addIngredient() {
    if (ingredient.trim() !== "") {
      setIngredientList((prevList) => [...prevList, ingredient]);
      setIngredient("");
    }
  }

  function removeIngredient(index: number) {
    setIngredientList((prevList) => prevList.filter((_, i) => i !== index));
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
      <div className="flex flex-col">
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
              >
                <Plus />
                Add Ingredient
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Ingredient List</h2>
            {ingredientList.length == 0 ? (
              <>
                <span className="text-center p-4">
                  Ingredient List is Empty
                </span>
              </>
            ) : (
              <ul className="list bg-base-100 rounded-box shadow-md">
                {renderListItem()}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default IngredientManager;
