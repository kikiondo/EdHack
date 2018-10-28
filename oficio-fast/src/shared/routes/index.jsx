import React from 'react'
import { Route, Switch } from 'react-router-dom'

import App from '../../components/App'
import Login from '../../components/Login'
import Registro from '../../components/Registro'
import Empleo from '../../components/Private/Empleo'
import Error404 from '../../shared/components/Error404'

const AppRoutes =  () => (
  <App>
    <Switch>
      <Route path='/' component={Login} exact/>
      <Route path='/registro' component={Registro} exact/>
      <Route path='/empleos' component={Empleo} exact/>
      <Route component={Error404}/>
    </Switch>
  </App>
)

export default AppRoutes