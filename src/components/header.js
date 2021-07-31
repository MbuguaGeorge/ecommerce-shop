import React, { Component } from 'react'
import user from '../components/images/user.png'

export class Header extends Component {
    render() {
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
                    <a href="/Login">
                        <h4><img src={user} alt="user profile" width="13px" /> Login</h4>
                    </a>
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
