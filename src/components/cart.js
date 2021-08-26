import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Cart = ({name, price, pk, image, category}) => {

    const[cart, setCart] = useState([]);
    const[user, setUser] = useState();

    useEffect(() => {

        axios.get('http://localhost:8000/cur/').then(
            res => {
                setUser({user: res.data})
            },
            err => { 
                console.log(err)
            }
        );

    }, []);

    const handleClick = () => {
        if (user){
            axios.get(`http://localhost:8000/remove/${pk}/`).then(
                res => {
                    setCart({cart: res.data})
                }
            )
        }
    }

    return(
        <div>
            <div className="t-detail">
                <tbody>
                    <tr>
                        <td>
                            <img src={`http://localhost:8000${image}`} alt="product image" width="100px"/>
                        </td>
                        <td>
                            <h4>{category}</h4>
                            <h3>{name}</h3>
                        </td>
                        <td>
                            5
                        </td>
                        <td>
                            <h3>{price} ksh</h3>
                        </td>
                        <td>
                            <button onClick={handleClick} >X</button>
                        </td>
                    </tr>
                </tbody>
            </div>
        </div>
    )
}

export default Cart;