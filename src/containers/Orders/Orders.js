import React, {Component} from 'react';
import Order from '../../components/Order/Order'
import axios from '../../axios-order'
import withErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler'

class Orders extends Component {
    state = {
        orders: [],
        loading: true,

    }
    componentDidMount() {
        axios.get('/orders.json')
        .then(res => {
            console.log(res.data);
            const fetchedOrders = [];
            for(let key in res.data) {
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                });
            }
            console.log(fetchedOrders);
        })
        .catch(err => {
            // 
        });
    }

    render() {
        return (
            <div>
                <Order/>
                <Order/>
            </div>
        )
    }
}

export default withErrorHandler(Orders, axios);