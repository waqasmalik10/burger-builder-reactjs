import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

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
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button 
                btnType="Danger" 
                clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button 
                btnType="Success"
                clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;