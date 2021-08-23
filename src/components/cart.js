import React from 'react'

const Cart = ({name, price}) => {
    return(
        <div>
            <div className="t-detail">
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
            </div>
        </div>
    )
}

export default Cart;