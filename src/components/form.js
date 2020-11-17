import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Form = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(`blueberry`);

  const APP_ID = "7783b35f";
  const APP_KEY = "aa8764507a5a12964ac067d917488e8f";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    GetRecipe();
  }, [query]);

  const GetRecipe = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <>
      <form className="search-form" onSubmit={getSearch}>
        <h1>Find a dish for today</h1>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Your today's dish is..."
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className='recipes-list'>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={parseInt(recipe.recipe.calories)}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
          />
        ))}
      </div>
    </>
  );
};

export default Form;
