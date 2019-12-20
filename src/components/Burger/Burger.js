import React from 'react'
import {withRouter} from 'react-router-dom'
import classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const burger = (props) => {
    console.log('[Burger.js] props ', props);
    let transformedIngredients = Object.keys(props.BurgerIngredients).map(ingredient => {
       return (
           [...Array(props.BurgerIngredients[ingredient])].map( (_, i) => {
               return <BurgerIngredients key={ingredient+i} type={ingredient}/>
           } )
       ) 
    }).reduce( (arr, el) => {
        return arr.concat(el);
    }, []);
    if(transformedIngredients.length === 0) transformedIngredients = <p>Please start adding ingredients</p>
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    );
}

export default withRouter(burger);