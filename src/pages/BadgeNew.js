import React, { Component } from 'react'
import header from "../images/badge-header.svg"
import Badge from "../components/Badge";
import './styles/BadgeNew.css'
import BadgeForm from '../components/BadgeForm';
import md5 from 'md5';
import api from '../api'
import PageLoading from '../components/PageLoading'

class BadgeNew extends Component {
    state = {
        error: null,
        loading: false,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            form: { ...this.state.form, [e.target.name]: e.target.value }
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        this.setState({
            error: null,
            loading: true
        })
        const hash = md5(this.state.form.email)
        const data = { ...this.state.form, avatarUrl: `https://www.gravatar.com/avatar/${hash}d=identicon` }
        try {
            await api.badges.create(data)
            this.setState({ loading: false })
            this.props.history.push('/badges')
        } catch (e) {
            this.setState({
                error: e.message,
                loading: false
            })
        }
    }

    render() {
        if(this.state.loading){
            return <PageLoading />
        }
        return (
            <div>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge name={this.state.form.firstName} lastName={this.state.form.lastName} jobTitle={this.state.form.jobTitle} twitter={this.state.form.twitter} email={this.state.form.email} />
                        </div>
                        <div className="col-6">
                            <BadgeForm onSubmit={this.handleSubmit} onChange={this.handleChange} form={this.state.form} error={this.state.error}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew