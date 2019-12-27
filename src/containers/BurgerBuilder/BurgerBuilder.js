import React, { Component } from 'react'
import {connect} from 'react-redux'
import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Aux/Aux'
import axios from '../../axios-order'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinners'
import WithErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler'
import * as burgerBuilderActions from '../../store/actions/index'

class BurgerBuilder extends Component {

    state = {
        purchasing: false
    }

    componentDidMount() {
        console.log(this.props);
        this.props.onInitIngredient();
    }

    componentWillMount() {
        
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

        let burger = this.props.error ? <p>Ingredients can't be loaded</p> : <Spinner/>;
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
                    { orderSummary }
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
        error: state.error,
        purchaseable: state.purchaseable
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingredient) => dispatch(burgerBuilderActions.addIngredient(ingredient)),
        onIngredientRemoved: (ingredient) => dispatch(burgerBuilderActions.removeIngredient(ingredient)),
        onInitIngredient: () => dispatch(burgerBuilderActions.initIngredients())
    }
}

export default connect(mapStatesToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder, axios));