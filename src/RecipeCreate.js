import React, { useState } from "react";

function RecipeCreate({saveHandler}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  const [photo, setPhoto] = useState("")
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
    saveHandler({ name, cuisine, photo, ingredients, preparation });
  };

  const handleNameChange = (event) => setName(event.target.value);
  const handleCuisineChange = (event) => setCuisine(event.target.value);
  const handleURLChange = (event) => setPhoto(event.target.value);
  const handleIngredientsChange = (event) => setIngredients(event.target.value);
  const handlePreparationChange = (event) => setPreparation(event.target.value);

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   }
  
//   const handleCuisineChange = (event) => {
//     setCuisine(event.target.value);
//   }
  
//   const handleURLChange = (event) => {
//     setImageURL(event.target.value);
//   }
  
//   const handleIngredientsChange = (event) => {
//     setIngredients(event.target.value);
//   }
  
//   const handlePreparationChange = (event) => {
//     setPreparation(event.target.value);
//   }
  
//   const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log("Submitted:", name, cuisine, ingredients, preparation, imageURL);
//     setName("");
//     setCuisine("");
//     setIngredients("");
//     setPreparation("");
//     setImageURL("");
//     saveHandler({name, cuisine, ingredients, preparation, imageURL});
// };
  
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              {(<input
                id="name"
                type="text"
                name="name"
                onChange={handleNameChange}
                placeholder="Name"
                value={name}
                size="9"
                required={true}
                />)}
            </td>
            <td>
             {( <input
                id="cuisine"
                type="text"
                name="cuisine"
                onChange={handleCuisineChange}
                placeholder="Cuisine"
                value={cuisine}
                size="9"
                required={true}
                />)}
            </td>
            <td>
             {( <input
                id="photo"
                type="URL"
                name="photo"
                onChange={handleURLChange}
                placeholder="URL"
                value={photo}
                size="9"
                required={true}
                />)}
            </td>
            <td>
             {( <textarea
                id="ingredients"
                type="text"
                name="ingredients"
                onChange={handleIngredientsChange}
                placeholder="Ingredients"
                value={ingredients}
                size="9"
                required={true}
                />)}
            </td>
            <td>
              {(<textarea
                id="preparation"
                type="text"
                name="preparation"
                onChange={handlePreparationChange}
                placeholder="Preparation"
                value={preparation}
                size="9"
                required={true}
                />)}
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;


