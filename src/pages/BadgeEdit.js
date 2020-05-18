import React, { Component } from 'react'
import header from "../images/badge-header.svg"
import Badge from "../components/Badge";
import './styles/BadgeEdit.css'
import BadgeForm from '../components/BadgeForm';
import md5 from 'md5';
import PageLoading from '../components/PageLoading'
import firebase from '../config'

class BadgeEdit extends Component {

    constructor(props){
        super(props)
        this.db = firebase.firestore()
    }

    state = {
        error: null,
        loading: true,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        }
    }

    componentDidMount(){
        this.fetchData()
    }

    async fetchData(){
        const badgeId = this.props.match.params.badgeId
        this.setState({loading:true, error:null})
        try {
            const data = await this.db.collection("badges").doc(badgeId).get()
            this.setState({loading:false, form: data.data()})
        } catch (error) {
            this.setState({loading:false, error:error.message})
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
            const badgeId = this.props.match.params.badgeId
            let ref = this.db.collection('badges').doc(badgeId)
            ref.update(data)
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
                <div className="BadgeEdit__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge name={this.state.form.firstName} lastName={this.state.form.lastName} jobTitle={this.state.form.jobTitle} twitter={this.state.form.twitter} email={this.state.form.email} />
                        </div>
                        <div className="col-6">
                            <h1>Editar Badge</h1>
                            <BadgeForm onSubmit={this.handleSubmit} onChange={this.handleChange} form={this.state.form} error={this.state.error}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeEdit