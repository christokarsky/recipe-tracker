import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  
  function createHandler(newRecipe){
    setRecipes((currentRecipe)=>[...currentRecipe, newRecipe]);
  }

  function deleteHandler(indexToDelete){
    setRecipes((currentRecipe) => currentRecipe.filter((recipe, index) =>  index !== indexToDelete))
  }
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteHandler={deleteHandler}/>
      <RecipeCreate saveHandler={createHandler}/>
    </div>
  );
}

export default App;
