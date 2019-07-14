import React from 'react'
import classes from './Burger.module.css'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

export default function Burger(props) {
    const ingredientsArray = Object.keys(props.ingredients) // since props.ingredients is a JS object, not an array, we need to turn it into an array so we can loop through it with map()
        .map(igKey => {
            return [...Array(props.ingredients[igKey])] // creates a new array for the number of each type of ingredient (the 'key' that is created)
                .map((_, i) => { // the _ means you don't care about the name of that object, but need its index, the 'i'
                    return <BurgerIngredient key={igKey + i} type={igKey} />; // setting the 'key' like this ensures that the key will be unique to each ingredient. Making sure the type is igKey implies that the keys you set in the BurgerBuilder state must be the same as the strings you check for in the switch/case in BurgerIngredient
                } 
            );
        });
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredientsArray}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}
