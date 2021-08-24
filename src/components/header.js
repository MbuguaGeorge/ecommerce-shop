import React, { Component } from 'react'
import user from '../components/images/user.png'
import axios from 'axios'
import cart from '../components/images/shopping-bag.png'
import save from '../components/images/heart.png'

class Header extends Component {

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
    }


    render() {
        
        let button;

        if (this.state.user){
            button = (
                <div className="user__detail">
                    <ul>
                        <li>
                            <a href="/checkout">
                                <h4><img src={cart} alt="shopping cart" width="17px" /></h4>
                            </a>
                        </li>
                        <li>
                            <a href="/checkout">
                            <h4><img src={save} alt="favourite" width="17px" /></h4>
                            </a>
                        </li>
                    </ul>
                </div>
            )
        }
        else{
            button = (
                <a href="/Login">
                    <h4><img src={user} alt="user profile" width="13px" /> Login</h4>
                </a>
            )
        }

        return (
            <div>
                <div className="nav">
                <div className="hero">
                    <h2>Bet.ty's Collection</h2>
                    <form method="" action="" class="search-form">
                    <input 
                        name="q"
                        type="text"
                        placeholder="Search..."
                    />
                    <button><i className="fa fa-search"></i></button>
                    </form>
                    {button}
                </div>
                <div className="header">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/shop">Shop</a>
                        </li>
                        <li>
                            <a href="/">New Arrivals</a>
                        </li>
                        <li>
                            <a href="/">About</a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}

export default Header
