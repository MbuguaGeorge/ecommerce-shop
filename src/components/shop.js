import React from 'react';

const Shop = ({category,image,price,name}) => {
        return(
            <div>
                <div className="shop__category">
                    <h2>Shoes</h2>

                    <div className="shop__flex">
                        <div className="shop__filter">
                            <div className="shop__category">
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
                                            <button>Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

export default Shop;