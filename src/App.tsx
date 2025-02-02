import IngredientManager from "./components/ingredient-manager";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="h-full">
      <Navbar />
      <div className="flex items-center justify-center">
        <IngredientManager />
      </div>
    </div>
  );
}

export default App;
