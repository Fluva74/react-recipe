import React from 'react'
import style from "../styles/recipe.module.css"

export default function Recipe({title, dishType, image, ingredients}) {
    return (
        <div className={style.card}>

           

            <div className={style.recipe}>
            <div className="content">
                    <h1>{title}</h1>
                    <p>{dishType}</p>
                    <ul>
                        {ingredients.map(ingredient => (
                            <li>{ingredient.text}</li>
                        ))}
                    </ul>
                    </div>
                    <div className="photo">
                    <img className={style.img} src={image} alt="" />
                </div>
                </div>

                
            

           
                
        </div>
       
        
    )
}
