import * as actionTypes from '../actions/actionTypes'
import updateObject from './utility'

const initialState = {
    ingredients : null,
    totalPrice: 4,
    error: false,
    purchaseable: false
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.6
}

const PurchaseableState = (ingredients) => {
    const sum = Object.keys(ingredients).map(ingredient => {
        return ingredients[ingredient]
    }).reduce( (sum, el) => {return sum+el}, 0);
    return sum>0;
}

const reducer = (state = initialState, action) => {
    let updatedIngredients = null;
    switch(action.type) {
        case actionTypes.ADD_INGREDIENT: 
            const updIng = {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] + 1
            }
            const updatedState = {
                ingredients: updIng
                , totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
                , purchaseable: PurchaseableState(updIng)
            }
            return updateObject(state, updatedState)
        case actionTypes.REMOVE_INGREDIENT:
            const updtdIng = {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] - 1
            }
            const updatedObj = {
                ingredients: updtdIng
                , totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
                , purchaseable: PurchaseableState(updtdIng)
            }
            return updateObject(state, updatedObj)
        case actionTypes.SET_INGREDIENTS:
            const updObj = {
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat
                },
                error: false,
                totalPrice: 4
            }
            return updateObject(state, updObj)
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, {error: true})
        default:
            return state;
    }
    
}

export default reducer;