import React from "react";

function ViewRecipe({recipe, deleteHandler}){
  console.log(recipe)
return (
<tr>
  <td>
  {(recipe.name)}
  </td> 
  <td>
  {(recipe.cuisine)}
  </td>
  <td>
     <img
          src={recipe.photo}
          alt="Recipe"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "scale-down",
          }}
        />
  </td>
  <td className="content_td">
    <p>
  {(recipe.ingredients)}
    </p>
  </td>
  <td className="content_td">
    <p>
  {(recipe.preparation)}
    </p>
  </td>
  <td>
    <button name="delete" onClick={deleteHandler}>delete</button>
  </td>
</tr>
)
}

export default ViewRecipe

// <td className="content_td"><p>{(recipe.ingredients)}</p></td>