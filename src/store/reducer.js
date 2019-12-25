import * as actionTypes from './actions'

const initialState = {
    ingredients : {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4,
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
            updatedIngredients = {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                }
            return {
                ...state,
                ingredients: updatedIngredients
                , totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
                , purchaseable: PurchaseableState(updatedIngredients)
            }
        case actionTypes.REMOVE_INGREDIENT:
            updatedIngredients = {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] - 1
            }
            return {
                ...state,
                ingredients: updatedIngredients
                , totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
                , purchaseable: PurchaseableState(updatedIngredients)
            }
        default:
            return state;
    }
    
}

export default reducer;