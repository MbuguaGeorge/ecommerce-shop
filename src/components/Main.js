import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Products from './products'
import Checkout from './checkout'

const Main = () => (
           
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path ="/Login" component={Login} />
                    <Route path ="/signup" component={Signup} />
                    <Route path="/shop" component={Products}/>
                    <Route path="/checkout" component={Checkout}/>
                </Switch>
      
)

export default Main;