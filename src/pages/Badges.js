import React from 'react'
import './styles/Badges.css'
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import { Link } from 'react-router-dom';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import firebase from '../config'

class Badges extends React.Component{
  constructor(props){
    super(props)
    this.db = firebase.firestore()
  }

   state = {
    loading: true,
    data: [],
    error: null
  };

  async componentDidMount(){
    try{
      const data = []
       await this.db.collection('badges').onSnapshot(result => {
         result.forEach(badge => {
           let item = {...badge.data()}
           item.id = badge.id
           data.push(item)
         })
         this.setState({
          loading: false,
          data
        })
       })
    }catch(e){
      this.setState({
        loading:false,
        error: e.message
      })
    }
  }

  render(){
    if(this.state.loading){
      return <PageLoading />
    }
    if(this.state.error){
      return <PageError error={this.state.error} />
    }
    return(
     <>
       <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <BadgesList badges={this.state.data} />
        </div>
     </>
    )
  }
}

export default Badges