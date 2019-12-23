import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import axios  from '../../../axios-order'
import Spinner from '../../../components/UI/Spinner/Spinners'
import Input from '../../../components/UI/Input/Input'

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
                , value: ''
                , valid: true

            }
        },
        formIsValid: false,
        loading: false
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
        console.log(this.props.ingredients);
        this.setState({loading: true});

        const formData = {};
        for(let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData,
            customer: {
                name: 'Waqas Malik',
                address: {
                    street: 'Test street',
                    city: 'Lahore',
                    zip: '54000'
                },
                email: 'test@tests.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false, purchasing: false});
                console.log("Response " , response);
                this.props.history.push('/checkout');
            })
            .catch(error => {
                this.setState({loading: false, purchasing: false});
                console.log("Error ", error);
            });   
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
        if(this.state.loading) form = <Spinner/>
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;