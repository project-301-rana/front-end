import React, { Component } from 'react'
import Header from './components/Header'
import {withAuth0} from '@auth0/auth0-react'
import Login from './login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Menu from './components/Menu'
import Home from './components/Home'
import Order from './components/Order'
import Profile from './components/Profile'
export class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Header/>
        <Switch>

          <Route exact path="/">
        {this.props.auth0.isAuthenticated ? <Home/> : <Login/>}
          </Route>
          
          <Route exact path="/Menu">
        <Menu/>
          </Route>

          <Route exact path="/Home">
          <Home/>
          </Route>

          

          <Route exact path="/Order">
        <Order/>
          </Route>

          <Route exact path="/Profile">
        <Profile/>
          </Route>

        </Switch>

        </Router>
      </div>
    )
  }
}

export default withAuth0(App)
