import React, { Component } from 'react'
import axios from 'axios'
import Cart from '../components/cart'

class Checkout extends Component {

    state = {
        cart: []
    };

    componentDidMount(){

        axios.get('http://localhost:8000/cur/').then(
            res => {
                this.setState({
                    user: res.data
                })
            },
            err => {
                console.log(err)
            }
        )
    
    };

    componentDidUpdate(){

        axios.get(`http://localhost:8000/cart/`).then(
            res => { 
                this.setState({
                    cart: res.data.cart.product
                })
            },
            err => {
                console.log(err)
            }
        )
        
    };

    render() {
        console.log(this.state.cart)
        let button;

        if (this.state.user){
            button = (
                <div>
                    {this.state.cart.map(items => (
                        <Cart 
                            key = {items.product_name}
                            name = {items.product_name}
                            price = {items.product_price}
                        />
                    ))}
                </div>
            )
        }
        else{
            button = (
                <div>no item in cart</div>
            )
        }

        return (
            <div>
                {button}
            </div>
        )
    }
}

export default Checkout
