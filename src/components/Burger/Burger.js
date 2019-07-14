import React from 'react'
import classes from './Burger.module.css'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

export default function Burger() {
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}
