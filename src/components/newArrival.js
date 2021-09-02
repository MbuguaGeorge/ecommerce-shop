import React, {Component} from 'react'
import image from '../components/images/f1.jpg'

class NewArrival extends Component{
    render(){
        return(
            <div>
                <div className="saved__product">
                    <div className="column">
                        <div className="row">
                            <div className="saved__product__page">
                                <img src={image} alt="product" width="210" height="280px"/>
                                <div className="description">
                                    <h4 className="product__type">Nike Shoes</h4>
                                    <h3 className="product__price">2500</h3>
                                </div>
                                <div className="new__item">
                                    <h5>New</h5>
                                </div>
                                <div className="add__to__cart">
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

export default NewArrival;