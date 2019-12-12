import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const burger = (props) => {

    const transformedIngredients = Object.keys(props.BurgerIngredients).map(ingredient => {
       return (
           [...Array(props.BurgerIngredients[ingredient])].map( (_, i) => {
               return <BurgerIngredients key={ingredient+i} type={ingredient}/>
           } )
       ) 
    });
    console.log(transformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    );
}

export default burger;