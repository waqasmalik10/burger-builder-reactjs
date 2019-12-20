import React from 'react';
import Burger from '../Burger/Burger'
import Button from '../UI/Button/Button'

import classes from './CheckoutSummary.module.css'

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Hope it takes well</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger BurgerIngredients={props.ingredients}/>
            </div>
            <Button 
                btnType="Danger"
                >CANCEL</Button>
            <Button 
                btnType="Success"
                >CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary;