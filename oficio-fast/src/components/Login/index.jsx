import React, { Component } from 'react'
import './style.css'

export default class Login extends Component {
  render () {
    return (
      <div className='login-container'>
          <div className='container'>
            <div className='img-container'>
              <img src="" alt=""/>
            </div>
            <h1 className='teal-text'>Bienvenido a OfficeFast</h1>
            <form action="" >
              <div className="input-field col s6">
                <input type="text" name="correo" className="validate" id="correo" placeholder="Correo"/>
              </div>
              <div className="input-field col s6">
                <input type="text" name="password" className="validate" id="password" placeholder="Contraseña" />
              </div>            
              <div className="buttons-container">
                <input type="submit" value="Iniciar Sesión" className="btn buttons-login"/>
                <input type="submit" value="Registrarse"  className="btn buttons-login"/>
              </div>
            </form>
          </div>
      </div> 
    )
  }
}

