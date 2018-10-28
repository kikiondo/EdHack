import React from 'react'
import uid from 'uid'
import './styles.css'
import { Link } from 'react-router-dom'

const Formulario = ({onAddCourse}) => (

  <div className="Registro-Container">
    <h2 className="center">Registrate</h2>
    <form onSubmit={onAddCourse}>
      <input type="hidden" name="id" value={uid(10)} />

      <div className="input-field col s6">
        <input name="name" placeholder="Nombre" id="Name" type="text" className="validate" required/>
      </div>
      <div className="input-field col s6">
        <input name="email" placeholder="Correo" id="Email" type="email" className="validate" required/>  
      </div>
      <div className="input-field col s6">
        <input name="password" placeholder="Contraseña" id="Password" type="password" className="validate" required/>
      </div>
      <div className="input-field col s6">
        <input name="school" placeholder="Escolaridad" id="School" type="text" className="validate" required/>
      </div>
      <div className="buttons-container">
        <Link to="/" className="btn waves-effect waves-light" name="action">Regresar</Link>
        <button className="blue darken-2 btn buttons-login" type="submit" name="action">Registrarte</button>
      </div>
    </form>
  </div>
)

export default Formulario