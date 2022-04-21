import React from 'react';
import './recipe.styles.css'


const Recipe = ({title, calories , image, ctype, ingred, share, servesss}) => {
    return(
        <div class='recipe-container'>
            <h1 class='center'>{title}</h1>
            <a class='center' href={share} target="_blank">
            <img src ={image} alt="" />
            </a>
            <p class='center' >Calories :{calories}</p>
            <p class='center'>Cuisine Type: {ctype}</p>
            <p>Serves: {servesss}</p>
            <p>Ingredients:</p>
            <ol>
                {ingred.map(item =>(
                <li>{item.text}</li>
            ))}
            </ol>
            
        </div>
    );
};

export default Recipe;

