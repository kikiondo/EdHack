import React from 'react'

import logo from '../../../src/shared/media/oficiofast-logo.png'

const Form = ({onLogin, onError, onResetPassword}) => (
  <div className='login-container'>
  <div className='container'>
    <div className='img-container'>
    <img src={logo} className="logo-about" alt="logo" />
    </div>
    <h2 className='text'>Bienvenido a OficioFast</h2>
    <form onSubmit={onLogin} >
      <div className="input-field col s6">
        <input type="text" name="email" className="validate" id="email" placeholder="Correo" />
      </div>
      <div className="input-field col s6">
        <input type="password" name="password" className="validate" id="password" placeholder="Contraseña" />
      </div>
      {
        onError.loginMessage &&
          <div className="u-error">
            <p>
              Error:&nbsp;&nbsp;{onError.loginMessage}&nbsp;
              <a href="#" onClick={onResetPassword} className="alert-link">¿Olvidaste tu contraseña?</a>
            </p>
          </div>
      }            
      <div className="buttons-container">
        <input type="submit" value="Iniciar Sesión" className="blue darken-2 btn buttons-login"/>
        <input type="submit" value="Registrarse"  className="blue darken-2 btn buttons-login"/>
      </div>
    </form>
  </div>
</div> 
)

export default Form
