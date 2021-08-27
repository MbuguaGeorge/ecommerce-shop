import React, {Component} from 'react';
import image from '../components/images/f1.jpg'
import axios from 'axios';

class Favourite extends Component {
    state = {};

    componentDidMount(){

        axios.get('http://localhost:8000/cur/').then(
            res => {
                this.setState({
                    user: res.data
                })
            },
            err => {
                console.log(err)
            }
        )

        axios.get(`http://localhost:8000/favourite/`).then(
            res => {
                this.setState({
                    favourite : res.data.favourite.product
                })
            }
        )

    }

    render(){
        console.log(this.state.favourite)
        return(
            <div>
                <div className="saved__product"> 
                    <div className="column">
                        <div className="row">
                            <div className="saved__product__page">
                                <img src={image} alt="products" width="210px" height="280px"/>
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