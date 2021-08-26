import React,{useEffect,useState} from 'react';
import Products from './products'

const Shop = () => {
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
                <div className="shop__category">
                    <h2>Shoes</h2>

                    <div className="shop__flex">
                        <div className="shop__filter">
                            <div className="shop_category">
                                <h3>Categories</h3>
                                <h5>Shoes</h5> 
                                <h5>Clothing</h5>
                                <h5>Accesories</h5>
                            </div>

                            <div className="shop__price">
                                <h3>Price</h3>
                                <form>
                                    <input 
                                        type="text"
                                        name="min"
                                    />
                                    <input 
                                        type="text"
                                        name="max"
                                    />
                                </form>
                                <button>Filter</button>
                            </div>
                            <div className="shop__brands">
                                <h3>Brands</h3>
                                <h5>Nike</h5>
                                <h5>Puma</h5>
                                <h5>Louis Vuiton</h5>
                                <h5>Chanel</h5>
                                <h5>Gucci</h5>
                            </div>
                        </div>

                    {shop.map(shops => (
                        <Products
                            key = {shops.id}
                            pk = {shops.id}
                            name = {shops.product_name}
                            category = {shops.product_category}
                            image = {shops.thumbnail}
                            price = {shops.product_price}
                        />
                    ))}

                    </div>

                </div> 
            </div>
        )
    }

export default Shop;