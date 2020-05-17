import React from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import Badges from './pages/Badges'
import BadgesNew from './pages/BadgeNew'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'
import BadgeEdit from './pages/BadgeEdit'
import BadgeDetailsContainer from './pages/BadgeDetailsContainer'

function App(){
  return (
    <BrowserRouter>
    <Layout>
       <Switch>
       <Route exact path="/" component={Badges} />
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgesNew} />
        <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer} />
        <Route exact path="/badges/edit/:badgeId" component={BadgeEdit} />
        <Route component={NotFound}/>
      </Switch>
    </Layout>
    </BrowserRouter>
  )
}

export default App