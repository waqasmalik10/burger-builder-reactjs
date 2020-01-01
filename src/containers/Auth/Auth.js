import React, {Component} from 'react';
import {connect} from 'react-redux'
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinners'
import classes from './Auth.module.css';
import * as actions from '../../store/actions/index'

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
            },
        }
        , isSignup: true
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

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup}
        });
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
    }

    render () {

        const formElements = [];
        for(let key in this.state.controls) {
            formElements.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElements.map(formElement => 
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
        if(this.props.loading) {
            form = <Spinner />
        }

        let errorMsg = null;
        if(this.props.error) {
            errorMsg = this.props.error;
        }

        return (
            <div className={classes.Auth}>
                {errorMsg}
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button btnType="Success">SUBMIT</Button>
                </form>
                <Button 
                    clicked={this.switchAuthModeHandler}
                    btnType="Danger">SWITCH TO {this.state.isSignup ? "SIGNIN" : "SIGNUP"}</Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);