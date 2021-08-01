import React from 'react';

const Products = ({category,image,price,name}) => {
    return(
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
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Products;