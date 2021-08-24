import React, {Component} from 'react';
import image from '../components/images/f1.jpg'

class Favourite extends Component {
    render(){
        return(
            <div>
                <div className="shop__product"> 
                    <div className="column">
                        <div className="row">
                            <div className="shop__product__page">
                                <img src={image} alt="products" width="250px" height="340px"/>
                                <div className="description">
                                    <h5 className="product__category">SHOES</h5>
                                    <h4 className="product__type">Nike Shoes</h4>
                                    <h3 className="product__price">2500</h3>
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
}

export default Favourite;