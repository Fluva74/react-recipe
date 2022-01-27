import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import Recipe from "../components/Recipe.jsx";
import PreviousSearches from "../components/PreviousSearches"


export default function Recipes() {
  

  const APP_ID = "5bcded32";
  const APP_KEY = "f1dca1d4f96bceb212851a5cd8b60c69";
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <>
     <div>
        <PreviousSearches />
        <div div className="App" >
          <form onSubmit={getSearch} className="search-box">
            <input className="search-bar" type="text" placeholder="Search for an ingredient!" value={search} onChange={updateSearch} />
            <button className="btn">
            <FontAwesomeIcon icon={faSearch} />
            </button>
            </form>
        </div>
      <div className="recipes-container">
        {/* <RecipeCard /> */}
        {recipes.map(recipe => (
      <Recipe className="recipe-card" recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        dishType={recipe.recipe.mealType[0]}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
      />
        ))}
          
        </div>
    </div>
 
     
    </>
  );
}
