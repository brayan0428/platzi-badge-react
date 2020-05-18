import React from 'react'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import BadgeDetails from './BadgeDetails'
import firebase from '../config'

class BadgeDetailsContainer extends React.Component{
  constructor(props){
    super(props)
    this.db = firebase.firestore()
  }

  state = {
    loading:true,
    error: null,
    data: undefined,
    modalIsOpen:false
  }

  componentDidMount(){
    this.fetchData()
  }

  handleOpenModal = e => {
    this.setState({modalIsOpen:true})
  }

  handleCloseModal = e => {
    this.setState({modalIsOpen:false})
  }

  handleDeleteBadge = async e => {
    this.setState({loading:true,error:null})
    try {
      this.db.collection("badges").doc(this.props.match.params.badgeId).delete()
      this.props.history.push('/')
    } catch (error) {
      this.setState({loading:false,error:error.message})
    }
  }

  async fetchData(){
    this.setState({loading:true,error:null})
    try {
      const badgeId = this.props.match.params.badgeId
      const reponse = await this.db.collection("badges").doc(badgeId).get()
      const data = {...reponse.data()}
      data.id = badgeId
      this.setState({
        data: data,
        loading:false
      })
    } catch (error) {
      this.setState({loading:false,error:error.message})
    }
  }

  render(){
    if(this.state.loading){
      return <PageLoading />
    }
    if(this.state.error){
      return <PageError />
    }
    return(
      <BadgeDetails 
      onCloseModal={this.handleCloseModal}
      onOpenModal={this.handleOpenModal}
      modalIsOpen={this.state.modalIsOpen}
      onDeleteBadge={this.handleDeleteBadge}
      badge={this.state.data}/>
    )
  }
}

export default BadgeDetailsContainer