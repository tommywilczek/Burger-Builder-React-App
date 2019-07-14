import React from 'react'

import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'Meat'},
]

export default function BuildControls(props) {
    return (
        <div className={classes.BuildControls}>
            {controls.map(ctrl => (
                <BuildControl key={ctrl.label} ingredientLabel={ctrl.label} />
            ))}
        </div>
    )
}
