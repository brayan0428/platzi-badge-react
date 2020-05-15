import React, { Component } from 'react'
import header from "../images/badge-header.svg"
import Badge from "../components/Badge";
import './styles/BadgeNew.css'
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends Component{
    state = {form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: ''
    }}

    handleChange = (e) => {
        this.setState({
            form: {...this.state.form, [e.target.name]: e.target.value}
        })
    }

    render(){
        return(
            <div>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col-6">
                        <Badge name={this.state.form.firstName} lastName={this.state.form.lastName} jobTitle={this.state.form.jobTitle} twitter={this.state.form.twitter} email={this.state.form.email} />
                    </div>
                    <div className="col-6">
                        <BadgeForm onChange={this.handleChange} form={this.state.form}/>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew