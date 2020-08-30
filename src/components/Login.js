import React from 'react'

export default function Login() {
    return (
        <div className="box1" >
            <h2>Login</h2>
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
        </div>
    )
}
