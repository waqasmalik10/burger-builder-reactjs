import React, {Component} from 'react';
import {connect} from 'react-redux';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    checkoutCancelled = () => {
        this.props.history.goBack();
    }

    checkoutContinued = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    render() {
        return (
            <div>
                <CheckoutSummary
                    checkoutContinued={this.checkoutContinued}
                    checkoutCancelled={this.checkoutCancelled}
                    ingredients={this.props.ings}/>
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    component={ContactData}
                    // render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.price} {...props}/>)}
                    />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients
    }
}


export default connect(mapStateToProps, null)(Checkout);