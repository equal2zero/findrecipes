import React from 'react';
import './card.styles.css'

export const Card = (props) => (
    <div className='card-container'>
        <<img src ={props.recipe.image} alt="" />
        <h2>{props.recipe.label}</h2>
        <p>{props.monster.email}</p>
    </div>
)