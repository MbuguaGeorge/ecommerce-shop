import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Products = ({category,image,price,name,pk}) => {

    const[user, setUser] = useState();
    const[cart, setCart] = useState([])

    useEffect(() => {
        
        axios.get('http://localhost:8000/cur/').then(
            res => {
                setUser({user: res.data})
            },
            err => { 
                console.log(err)
            }
        )
    },[]);

    const handleClick = () => {
        if (user){
            axios.get(`http://localhost:8000/add/${pk}/`).then(
                res => {
                    setCart({cart: res.data})
                }
            )
        }
    }

    console.log(cart)
    let button;

    if (user){
        button = (
            <div>
                <div className="shop__product"> 
                    <div className="column">
                        <div className="row">
                            <div className="shop__product__page">
                                <img src={image} alt="products"/>
                                <div className="description">
                                    <h5 className="product__category">{category}</h5>
                                    <h4 className="product__type">{name}</h4>
                                    <h3 className="product__price">{price}</h3>
                                </div>
                                <div className="save__item">
                                    <i className="fa fa-heart"></i>
                                </div>
                                <div className="add__cart">
                                    <button onClick={handleClick} >Add to cart</button>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        button = (
            <div>log in</div>
        )
    }
    
    return(
        <div>
            {button}
        </div>
    )
}

export default Products;