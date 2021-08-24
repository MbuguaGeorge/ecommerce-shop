import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Shop from './shop'
import Checkout from './checkout'
import Favourite from './save'

const Main = () => (
           
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path ="/Login" component={Login} />
                    <Route path ="/signup" component={Signup} />
                    <Route path="/shop" component={Shop} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/saved" component={Favourite} />
                </Switch>
      
)

export default Main;