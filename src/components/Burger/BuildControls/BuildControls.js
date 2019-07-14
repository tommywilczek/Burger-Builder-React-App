import React from 'react'

import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
]

export default function BuildControls(props) {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p> 
            {/* toFixed(2) means round to 2 decimal places */}
            {controls.map(ctrl => (
                <BuildControl 
                    key={ctrl.label} 
                    ingredientLabel={ctrl.label} 
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    isDisabled={props.disabled[ctrl.type]}    />
            ))}
            <button 
                className={classes.OrderButton}
                disabled={!props.isPurchasable}>ORDER NOW</button>
        </div>
    )
}
