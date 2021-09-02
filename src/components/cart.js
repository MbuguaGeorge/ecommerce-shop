import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Cart = ({name, price, pk, image, category}) => {

    const[cart, setCart] = useState([]);
    const[user, setUser] = useState();
    const[count, setCount] = useState(1);

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

    const incrementCount = (event) =>{
        event.preventDefault()
        setCount(count => count + 1,)
    }

    const decrementCount = (event) =>{
        event.preventDefault()
        setCount(count => Math.max(count - 1, 1))
    }

    const handleClick = () => {
        if (user){
            axios.get(`http://localhost:8000/remove/${pk}/`).then(
                res => {
                    setCart({cart: res.data})
                }
            )
        }
    }
    
    let total;
    total = price * count

    return(
        <div>
            <div className="t-detail">
                <tbody>
                    <tr>
                        <td>
                            <img src={`http://localhost:8000${image}`} alt="product image" width="80px"/>
                        </td>
                        <td>
                            <h4>{category}</h4>
                            <h3>{name}</h3>
                        </td>
                        <td>
                            <h3>{price} ksh</h3>
                        </td>
                        <td>
                            <div className="table_category">
                                <div>
                                    <button onClick={decrementCount} >-</button>
                                </div>
                                <div>
                                    <input type="text" value={count}/>
                                </div>
                                <div>
                                    <button onClick={incrementCount}>+</button>
                                </div>
                            </div>
                        </td>
                        <td>
                            <h3>{total} ksh</h3>
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