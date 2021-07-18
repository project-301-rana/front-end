import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";
import { Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import '../CSS/Header.css'

export class Header extends Component {
    
    render() {
        return (
            <>
                <Navbar className="nav">
                {/* <img className="logo" src="http://www.pngall.com/wp-content/uploads/2016/06/Healthy-Food-PNG-Pic.png"/> */}
                <h2>Resturant</h2>
                    <Button className="but1">  <Link to="/Home" className="link">Home</Link></Button>
                    <Button className="but">  <Link to="/Menu" className="link">Menu</Link></Button>
                    <Button className="but">  <Link to="/Order" className="link">Order</Link></Button>
                    <Button className="but">  <Link to="/Profile" className="link">Profile</Link></Button>
                    {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
                </Navbar>
            </>
        )
    }
}

export default withAuth0(Header)
