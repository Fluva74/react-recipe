export default function RecipeCard({title, dishType, image, ingredients}) {
    return (
        <div className="recipeCard">
  
  <div className="recipeCard">
            <h1>{title}</h1>
            <p>{dishType}</p>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
                <img src={image} alt="" />
        </div>
        </div>
        
    )
  }
  