import React, {Component} from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.module.css';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                }
                , value: ''
                , validation: {
                    required: true,
                    isEmail: true
                }
                , valid: false
                , touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                }
                , value: ''
                , validation: {
                    required: true,
                    minLength: 6
                }
                , valid: false
                , touched: false
            }
        }
    }

    inputChangedHanlder = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName] : {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        }
        this.setState({controls: updatedControls});
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

    render () {

        const formElements = [];
        for(let key in this.state.controls) {
            formElements.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        const form = formElements.map(formElement => 
            <Input 
                key={formElement.id} 
                elementtype={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value} 
                changed={(event) => this.inputChangedHanlder(event, formElement.id)}
                shouldValidate={formElement.config.validation}
                invalid={!formElement.config.valid}
                touched={formElement.config.touched}/>
        );

        return (
            <div className={classes.Auth}>
                {form}
                <Button btnType="Success">SUBMIT</Button>
            </div>
        )
    }
}

export default Auth;