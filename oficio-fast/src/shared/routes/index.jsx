import React, { Component } from 'react'
import { firebaseAuth } from '../../data/index'
import {
	Route,
	BrowserRouter as Router,
	Link,
	Redirect,
	Switch
} from 'react-router-dom'
import App from '../../components/App'
import Login from '../../components/Login'
import Registro from '../../components/Registro'
import pri from '../../components/Private/'
import Error404 from '../../shared/components/Error404'

const PrivateRoute = ( { component: Component, authed, rest } ) => (
  <Route
    {...rest}
    render={
      props => authed === true
        ? <Component {...props} />
        : <Redirect to={ { pathname: '/', state: { from: props.location } } } />
    }
  />
)

const PublicRoute = ( { component: Component, authed, rest } ) => (
  <Route
    {...rest}
    render={
      props => authed === false
        ? <Component {...props} />
        : <Redirect to='/pri' />
    }
  />
)
class AppRoutes extends Component {
  constructor(...props) {
    super(...props)

    this.state = {
      authed: false,
      loading: true
    }
  }

  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged( user => {
      if (user) {
        this.setState({
          authed: true,
          loading: false
        })
      } else {
        this.setState({
          loading: false
        })
      }
    })
  }

  componentWillUnmount() {
    this.removeListener()
  }

  render () {
    return this.state.loading === true
    ? <h1>Cargando...</h1>
    : (
        <App>
          <Switch>
            <Route authed={this.state.authed} path='/' component={Login} exact/>
            <PublicRoute authed={this.state.authed} path='/registro' component={Registro} />
            <PrivateRoute authed={this.state.authed} path='/pri' component={pri} />
            <Route component={Error404}/>
          </Switch>
        </App>
    )
  }
}

export default AppRoutes
