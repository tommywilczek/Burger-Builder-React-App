import React, { Component, Fragment } from 'react'

import Button from '../../UI/Button/Button'

export default class OrderSummary extends Component {
    //  This is only a class component so we can play with Lifecycle Hooks
    componentWillUpdate() {
        console.log('[OrderSummary] will update');
    }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
            )});
        return (
            <Fragment>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button 
                    buttonType="Danger"
                    clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button 
                    buttonType="Success"
                    clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Fragment>
        )

    }
}
