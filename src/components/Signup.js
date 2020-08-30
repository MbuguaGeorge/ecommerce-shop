import React from 'react'
import {Link} from 'react-router-dom'

function Signup(props) {
    function clickHandler(){
        console.log('form was submitted')
    }
    return (
            <div className="box">
            <h1>SIGNUP</h1>
            <form>
                <input 
                    type="text"
                    name="username"
                    placeholder="username..."
                />
                <input 
                    type="text"
                    name="email"
                    placeholder="email.."
                />
                <input 
                type="password"
                name="password"
                placeholder="password..." 
                />
                <input 
                    type="password"
                    name="confirm password"
                    placeholder="confirm password..."
                />
                <input 
                    type="submit"
                    value="Submit"
                    className="btn"
                    onClick = {clickHandler}
                />
            </form>
            <p style={{color:'white'}} >
                Already have an account <Link to="/Login">Login</Link>
            </p>
            </div>
    )
}

Signup.propTypes = {


}

export default Signup

