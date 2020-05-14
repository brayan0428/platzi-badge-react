import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import header from "../images/badge-header.svg"
import Badge from "../components/Badge";
import './styles/BadgeNew.css'

class BadgeNew extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col">
                        <Badge name="Brayan" lastName="Llanos" jobTitle="Frontend Developer" twitter="@brayan0428" />
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew