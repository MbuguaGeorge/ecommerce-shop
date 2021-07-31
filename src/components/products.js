import React,{useEffect,useState} from 'react';
import Shop from './shop'

const Products = () => {

    const[shop, setShop] = useState([]);

    useEffect(() => {
        getShop();
    }, []);

    const getShop = async() => {
        const response = await fetch(`http://127.0.0.1:8000/products`);
        const data = await response.json();
        console.log(data)
        setShop(data);
    }

    return(
        <div>
            {shop.map(shops => (
                <Shop 
                    key = {shops.product_name}
                    name = {shops.product_name}
                    category = {shops.product_category}
                    price = {shops.product_price}
                    image = {shops.thumbnail}
                 /> 
            ))}  
        </div>
    )
}

export default Products;