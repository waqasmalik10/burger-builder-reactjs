import React from 'react'
import Aux from '../../../hoc/Aux'

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(ingredientKey => {
        return (
            <li key={ingredientKey}>
                <span style={ {textTransform: 'capitalize'} }>{ingredientKey}</span>: {props.ingredients[ingredientKey]}
            </li>
        )
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delecious burger with the following ingredients: </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to checkout?</p>
            <button>CANCEL</button>
            <button>CONTINUE</button>
        </Aux>
    )
}

export default orderSummary;