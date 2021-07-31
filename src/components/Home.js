import React, { Component } from 'react'
import main from '../components/images/main.png'
import shoe from '../components/images/shoes.jpg'
import cloth from '../components/images/clothes.jpg'
import bag from '../components/images/bags.jpg'
import vans from '../components/images/vans.jpg'
import f1 from '../components/images/f1.jpg'
import jacket from '../components/images/jacket.jpg'
import clothes from '../components/images/cloth.jpg'
import nike from '../components/images/nike.jpg'

class Home extends Component {
    render() {
        return(
            <div>
                <div className="home">
                    <img src={main} alt="background"/>
                    <ul>
                        <h2>New Arrivals</h2>
                        <a href="/shop"><button>Shop Now</button></a>
                    </ul>
                </div>
                <div className="discover">
                    <h3><span className="d-block">Discover</span> The Collections</h3>
                </div>
                <div className="category">
                    <ul>
                        <a href="#">
                            <li>
                                <img src={shoe} alt="shoes" width="325px"/>
                                <div className="center"><h3>Shoes</h3></div>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <img src={cloth} alt="clothes" width="325px"/>
                                <div className="center"><h3>Clothes</h3></div>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <img src={bag} alt="handbag" width="325px"/>
                                <div className="center"><h3>Accesories</h3></div>
                            </li>
                        </a>
                    </ul>
                </div>
                <div className="discover1">
                    <h3>Popular Products</h3>
                </div>
                <div className="popular">
                    <ul>
                        <li>
                            <img src={vans} alt="popularProducts"/>
                            <div className="description">
                                <h5 className="product__category">SHOE</h5>
                                <h4 className="product__type">Vans shoes</h4>
                                <h3 className="product__price">$50.00</h3>
                            </div>
                            <div className="save__item">
                                <i className="fa fa-heart"></i>
                            </div>
                            <div className="add__cart">
                                <button>Add to cart</button>
                            </div>
                        </li>
                        <li>
                            <img src={clothes} alt="popularProducts"/>
                            <div className="description">
                                <h5 className="product__category">CLOTHES</h5>
                                <h4 className="product__type">Sweater</h4>
                                <h3 className="product__price">$60.00</h3>
                            </div>
                            <div className="save__item">
                                <i className="fa fa-heart"></i>
                            </div>
                            <div className="add__cart">
                                <button>Add to cart</button>
                            </div> 
                        </li>
                        <li>
                            <img src={nike} alt="popularProducts"/>
                            <div className="description">
                                <h5 className="product__category">CLOTHES</h5>
                                <h4 className="product__type">Sweater</h4>
                                <h3 className="product__price">$60.00</h3>
                            </div>
                            <div className="save__item">
                                <i className="fa fa-heart"></i>
                            </div>
                            <div className="add__cart">
                                <button>Add to cart</button>
                            </div> 
                        </li>
                        <li>
                            <img src={f1} alt="popularProducts"/>
                            <div className="description">
                                <h5 className="product__category">SHOE</h5>
                                <h4 className="product__type">Nike AirForce1</h4>
                                <h3 className="product__price">$65.00</h3>
                            </div>
                            <div className="save__item">
                                <i className="fa fa-heart"></i>
                            </div>
                            <div className="add__cart">
                                <button>Add to cart</button>
                            </div> 
                        </li>
                        <li>
                            <img src={jacket} alt="popularProducts"/>
                            <div className="description">
                                <h5 className="product__category">CLOTHES</h5>
                                <h4 className="product__type">Jacket</h4>
                                <h3 className="product__price">$15.00</h3>
                            </div>
                            <div className="save__item">
                                <i className="fa fa-heart"></i>
                            </div> 
                            <div className="add__cart">
                                <button>Add to cart</button>
                            </div>
                        </li>
                    </ul>
                    <h3>Discover More</h3>
                    <hr/>
                </div>
            </div>
        )
    }
}

export default Home
