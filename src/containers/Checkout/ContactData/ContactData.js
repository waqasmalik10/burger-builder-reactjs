import React, {Component} from 'react'
import {connect} from 'react-redux'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import axios  from '../../../axios-order'
import Spinner from '../../../components/UI/Spinner/Spinners'
import Input from '../../../components/UI/Input/Input'
import withErrorHandler from '../../../hoc/withErrorHandler/WithErrorHandler'
import * as actions from '../../../store/actions/index'

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                }
                , value: ''
                , validation: {
                    required: true
                }
                , valid: false
                , touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Email'
                }
                , value: ''
                , validation: {
                    required: true
                }
                , valid: false
                , touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Address'
                }
                , value: ''
                , validation: {
                    required: true
                }
                , valid: false
                , touched: false
            },
            postalCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Postal'
                }
                , value: ''
                , validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                }
                , valid: false
                , touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country'
                }
                , value: ''
                , validation: {
                    required: true
                }
                , valid: false
                , touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                }
                , value: 'fastest'
                , valid: true

            }
        },
        formIsValid: false
    }

    checkValidity = (value, rules) => {
        console.log(value, rules);
        let isValid = true;
        if(rules && rules.required) {
            isValid = (value.trim() !== '' &&  isValid);
        }

        if(rules && rules.minLength) {
            isValid = (value.trim().length >= 5 &&  isValid)
        }

        if(rules && rules.maxLength) {
            isValid = (value.trim().length <=5 &&  isValid)
        }

        return isValid;
    }

    orderHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for(let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData,
            deliveryMethod: 'fastest',
            userId: this.props.userId
        }
        console.log("Token here ", this.props.token);
        this.props.onOrderBurger(order, this.props.token)
    }

    inputChangedHanlder = (event, inputIdentifier) => {
        console.log(event.target.value);
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedInputElement = {
            ...updatedOrderForm[inputIdentifier]
        }
        updatedInputElement.value = event.target.value;
        updatedInputElement.touched = true;
        updatedInputElement.valid = this.checkValidity(updatedInputElement.value, updatedInputElement.validation);
        updatedOrderForm[inputIdentifier] = updatedInputElement;
        let formIsValid = true;
        for(let inputElement in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputElement].valid && formIsValid;
        }
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    }

    render () {

        const formElements = [];
        for(let key in this.state.orderForm) {
            formElements.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                {
                    formElements.map(formElement => {
                        return <Input
                            key={formElement.id}
                            elementtype={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value} 
                            changed={(event) => this.inputChangedHanlder(event, formElement.id)}
                            shouldValidate={formElement.config.validation}
                            invalid={!formElement.config.valid}
                            touched={formElement.config.touched}/>
                    })
                }
                    <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
                </form>
        );
        if(this.props.loading) form = <Spinner/>
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.idToken,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));