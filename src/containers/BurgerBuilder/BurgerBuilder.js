import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Aux/Aux'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-order'
import Spinner from '../../components/UI/Spinner/Spinners'
import WithErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3, 
    bacon: 0.6
}
class BurgerBuilder extends Component {

    state = {
        ingredients : null,
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        console.log(this.props);
    }

    componentWillMount() {
        axios.get('ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data});
            })
            .catch(error => {
                this.setState({error: true, loading: true, purchasing: true});
            })
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

    addIngredientHandler = (type) => {
        const newTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        const newCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] = newCount;
        this.setState({ingredients: updatedIngredients, totalPrice: newTotalPrice});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const updatedIngredients = {...this.state.ingredients};
        if(this.state.ingredients[type] > 0) {
            const newTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
            const newCount = this.state.ingredients[type] - 1;
            updatedIngredients[type] = newCount;
            this.setState({ingredients: updatedIngredients, totalPrice: newTotalPrice});
        }
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHanlder = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {

        // this.setState({loading: true});
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'Waqas Malik',
        //         address: {
        //             street: 'Test street',
        //             city: 'Lahore',
        //             zip: '54000'
        //         },
        //         email: 'test@tests.com'
        //     },
        //     deliveryMethod: 'fastest'
        // }
        // axios.post('/orders.json', order)
        //     .then(response => {
        //         this.setState({loading: false, purchasing: false});
        //         console.log("Response " , response);
        //     })
        //     .catch(error => {
        //         this.setState({loading: false, purchasing: false});
        //         console.log("Error ", error);
        //     });
        // this.props.history.push('/checkout');
        let queryParams = [];
        for(let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i)+ "="+ encodeURIComponent(this.state.ingredients[i]));
        }
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryParams.join("&")
        });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner/>;
        let orderSummary = null;
        if(this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger BurgerIngredients={this.state.ingredients}/>
                    <BuildControls 
                            addIngredient={this.addIngredientHandler} 
                            removeIngredient={this.removeIngredientHandler}
                            disabledInfo={disabledInfo}
                            totalPrice={this.state.totalPrice}
                            purchaseable={this.state.purchaseable}
                            ordered={this.purchaseHandler}/>
                </Aux>
            )
            orderSummary = <OrderSummary 
                        ingredients={this.state.ingredients}
                        purchaseContinued={this.purchaseContinueHandler}
                        purchaseCancelled={this.purchaseCancelHanlder}
                        price={this.state.totalPrice}
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

export default WithErrorHandler(BurgerBuilder, axios);