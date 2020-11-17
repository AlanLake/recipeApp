import React from "react";

const Recipe = ({ title, calories, image, ingredients, url}) => {
  return (
    <a href={url} className="recipe">
      <img src={image} alt="recipe" className="recipe_thumb" />
      <h2 className="recipe_name">{title}</h2>
      <ul className="recipe_ingredients-list">
        {ingredients.map((ingredient) => {
          return <li className="recipe_ingredient">{ingredient.text}</li>;
        })}
      </ul>
      <p className="recipe_calories-counter">{calories} calories</p>
    </a>
  );
};

export default Recipe;
