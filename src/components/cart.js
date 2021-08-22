import React from 'react'

const Cart = ({name, price}) => {
    return(
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
                                        <h3>{name}</h3>
                                    </td>
                                    <td>
                                        <h3>{price} ksh</h3>
                                    </td>
                                    <td>
                                        5
                                    </td>
                                    <td>
                                        <h3>$200.00</h3>
                                    </td>
                                    <td>
                                        <button>X</button>
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

export default Cart;