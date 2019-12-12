import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <b>${props.totalPrice.toFixed(2)}</b></p>
        {controls.map( ctrl => (
            <BuildControl 
            addIngredient={() => props.addIngredient(ctrl.type)}
            removeIngredient={() => props.removeIngredient(ctrl.type)}
            disabled={props.disabledInfo[ctrl.type]}
            key={ctrl.label} 
            label={ctrl.label} />
        ) )}
        <button className={classes.OrderButton} disabled={!props.purchaseable}>ORDER NOW</button>
    </div>
)

export default buildControls;