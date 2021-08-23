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

        axios.get('http://localhost:8000/cart/').then(
            res => { 
                this.setState({
                    cart: res.data.cart.product
                })
            },
            err => {
                console.log(err)
            }
        )
    
    }

    render() {
        console.log(this.state.cart)
        let button;

        if (this.state.user){
            button = (
                <div>
                    <form>
                        <div className="checkout">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Remove</th>
                                    </tr> 
                                </thead>
                                {this.state.cart.map(items => (
                                    <Cart 
                                        key = {items.product_name}
                                        name = {items.product_name}
                                        price = {items.product_price}
                                    />
                                ))}
                            </table>
                            <div className="proceed">
                                <h4>Cart totals</h4>
                                <hr/>
                                <div className="total">
                                    <h5>Total</h5>
                                    <h5>$250.00</h5>
                                </div>
                                <button>Proceed to checkout</button>
                            </div>
                        </div>
                    </form>
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
