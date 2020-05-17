import React from 'react'
import api from  '../api'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import BadgeDetails from './BadgeDetails'

class BadgeDetailsContainer extends React.Component{
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
      await api.badges.remove(this.props.match.params.badgeId)
      this.setState({loading:false})
      this.props.history.push('/')
    } catch (error) {
      this.setState({loading:false,error:error.message})
    }
  }

  async fetchData(){
    this.setState({loading:true,error:null})
    try {
      const data = await api.badges.read(this.props.match.params.badgeId)
      this.setState({
        data,
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