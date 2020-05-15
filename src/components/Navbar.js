import React, { Component } from 'react'
import logo from '../images/logo.svg'
import './styles/Navbar.css'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                <Link to="/" className="Navbar__brand">
                    <img src={logo} alt="Logo" className="Navbar__logo" />
                    <span className="font-weight-light">Platzi</span>
                    <span className="font-weight-light">Conf</span>
                </Link>
                </div>
            </div>
        )
    }
}

export default Navbar