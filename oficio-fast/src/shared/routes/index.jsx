import React from 'react'
import { Route, Switch } from 'react-router-dom'

import App from '../../components/App'
import Login from '../../components/Login'
import Registro from '../../components/Registro'

const AppRoutes =  () => (
  <App>
    <Switch>
      <Route path='/' component={Login} exact/>
      <Route path='/registro' component={Registro} exact/>
    </Switch>
  </App>
)

export default AppRoutes