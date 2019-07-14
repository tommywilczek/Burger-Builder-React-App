import React, { Component, Fragment } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = { // good to keep global constants in all caps
    salad: .5,
    cheese: .4,
    meat: 1.3,
    bacon: .7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0, );
        const isPurchasable = sum > 0;

        this.setState({ purchasable: isPurchasable })
    }

    addIngredient = (typeOfIngredient) => {
        const oldCount = this.state.ingredients[typeOfIngredient];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[typeOfIngredient] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[typeOfIngredient];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredient = (typeOfIngredient) => {
        const oldCount = this.state.ingredients[typeOfIngredient];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[typeOfIngredient] = updatedCount;

        const priceDeduction = INGREDIENT_PRICES[typeOfIngredient];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
        this.updatePurchaseState(updatedIngredients);
    }
    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Fragment>
                <Modal>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredient}
                    ingredientRemoved={this.removeIngredient}
                    disabled={disabledInfo}
                    isPurchasable={this.state.purchasable}
                    price={this.state.totalPrice} />
            </Fragment>
        );
    }
}

export default BurgerBuilder;
