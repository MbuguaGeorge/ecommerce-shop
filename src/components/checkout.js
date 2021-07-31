import React, { Component } from 'react'

class Checkout extends Component {
    render() {
        return (
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
                                <tbody>
                                    <tr>
                                        <td>
                                            <h3>Nike Airforce 1s</h3>
                                        </td>
                                        <td>
                                            <h3>$45.00</h3>
                                        </td>
                                        <td>
                                            5
                                        </td>
                                        <td>
                                            <h3>$200.00</h3>
                                        </td>
                                        <td>
                                            <a href="#" className="btn btn-primary height-auto btn-sm">X</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h3>Nike Airforce 1s</h3>
                                        </td>
                                        <td>
                                            <h3>$45.00</h3>
                                        </td>
                                        <td>
                                            5
                                        </td>
                                        <td>
                                            <h3>$200.00</h3>
                                        </td>
                                        <td>
                                            <a href="#" className="btn btn-primary height-auto btn-sm">X</a>
                                        </td>
                                    </tr>
                                </tbody>
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
}

export default Checkout
