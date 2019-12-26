import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actionTypes from '../../store/actions/actionTypes'
import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Aux/Aux'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-order'
import Spinner from '../../components/UI/Spinner/Spinners'
import WithErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler'

class BurgerBuilder extends Component {

    state = {
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        console.log(this.props);
    }

    componentWillMount() {
        // axios.get('ingredients.json')
        //     .then(response => {
        //         this.setState({ingredients: response.data});
        //     })
        //     .catch(error => {
        //         this.setState({error: true, loading: true, purchasing: true});
        //     })
    }

    updatePurchaseState = (ingredients) => {
        // const ingredients = {
        //     ...this.state.ingredients
        // }
        const sum = Object.keys(ingredients).map(ingredient => {
            return ingredients[ingredient]
        }).reduce( (sum, el) => {return sum+el}, 0);
        this.setState({purchaseable: sum>0});
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHanlder = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout');
    }

    render() {
        const disabledInfo = {
            ...this.props.ing
        }
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner/>;
        let orderSummary = null;
        if(this.props.ing) {
            burger = (
                <Aux>
                    <Burger BurgerIngredients={this.props.ing}/>
                    <BuildControls 
                            addIngredient={(ingredient) => this.props.onIngredientAdded(ingredient)} 
                            removeIngredient={(ingredient) => this.props.onIngredientRemoved(ingredient)}
                            disabledInfo={disabledInfo}
                            totalPrice={this.props.totPrice}
                            purchaseable={this.props.purchaseable}
                            ordered={this.purchaseHandler}/>
                </Aux>
            )
            orderSummary = <OrderSummary 
                        ingredients={this.props.ing}
                        purchaseContinued={this.purchaseContinueHandler}
                        purchaseCancelled={this.purchaseCancelHanlder}
                        price={this.props.totPrice}
                        />
        }
        
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHanlder}>
                    { this.state.loading ? <Spinner /> : orderSummary }
                </Modal>
                {burger}
            </Aux>
        )
    }
}

const mapStatesToProps = state => {
    return {
        ing: state.ingredients,
        totPrice: state.totalPrice,
        purchaseable: state.purchaseable
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingredient) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingredient}),
        onIngredientRemoved: (ingredient) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingredient})
    }
}

export default connect(mapStatesToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder, axios));