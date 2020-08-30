import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Seller from './Seller'
import Detail from './Detail'

const Main = () => (
           
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path ="/Login" component={Login} />
                    <Route path ="/signup" component={Signup} />
                    <Route path ="/seller" component={Seller} />
                    <Route path = "/details" component={Detail} />
                </Switch>
      
)

export default Main;