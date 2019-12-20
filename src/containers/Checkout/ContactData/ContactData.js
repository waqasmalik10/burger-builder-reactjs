import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import axios  from '../../../axios-order'
import Spinner from '../../../components/UI/Spinner/Spinners'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
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
    render () {
        let form = (
            <form>
                    <input type="text" className={classes.Input} name="name" placeholder="Your Name"/>
                    <input type="text" className={classes.Input} name="email" placeholder="Your Email"/>
                    <input type="text" className={classes.Input} name="street" placeholder="Your Street"/>
                    <input type="text" className={classes.Input} name="postal" placeholder="Your Postal Code"/>
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
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