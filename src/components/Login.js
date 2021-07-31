import React from 'react'
import {Link} from 'react-router-dom'

export default function Login() {
    return (
        <div className="box1" >
            <h1>Login</h1>
            <form>
                <input 
                type="text"
                name="username"
                placeholder="username..."
                />
                <input 
                type="password"
                name="password"
                placeholder="password..."
                />
                <input 
                type="submit"
                value="Login"
                className="btn"
                />
            </form>
            <p>
                Don't have an account <Link to="/signup">Register</Link>
            </p>
        </div>
    )
}
