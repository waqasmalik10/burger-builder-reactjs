import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Aux'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3, 
    bacon: 0.6
}
class BurgerBuilder extends Component {

    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const newTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        const newCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] = newCount;
        this.setState({ingredients: updatedIngredients, totalPrice: newTotalPrice})
    }

    removeIngredientHandler = (type) => {
        if(this.state.ingredients[type] > 0) {
            const newTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
            const newCount = this.state.ingredients[type] - 1;
            const updatedIngredients = {...this.state.ingredients};
            updatedIngredients[type] = newCount;
            this.setState({ingredients: updatedIngredients, totalPrice: newTotalPrice});
        }
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Burger BurgerIngredients={this.state.ingredients}/>
                <BuildControls 
                    addIngredient={this.addIngredientHandler} 
                    removeIngredient={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                    totalPrice={this.state.totalPrice}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;