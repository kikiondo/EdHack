import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../../shared/media/empleo.png'
import './addEmpleo.css'

const AddEmpleo = () => (
  <div className="addEmpleo-container">
    <div className="container">

      <div className='img-container'>
        <img src={logo} className="logo-about" alt="logo" />
      </div>
      <h2 className='text'>Crear Empleo</h2>

      <form >
        <div className="input-field col s6">
          <input type="text" name="nombre" className="validate" id="nombre" placeholder="Nombre del empleo" />
        </div>
        <div className="input-field col s6">
          <input type="text" name="empresa" className="validate" id="empresa" placeholder="Nombre de la empresa o negocio" />
        </div>
        <div className="input-field col s6">
          <input type="text" name="escolaridad" className="validate" id="escolaridad" placeholder="Escolaridad minima" />
        </div>
        <div className="input-field col s6">
          <input type="text" name="sueldo" className="validate" id="sueldo" placeholder="Sueldo real o aproximado" />
        </div>
        <div className="input-field col s6">
          <input type="text" name="pais" className="validate" id="pais" placeholder="País" />
        </div>
        <div className="input-field col s6">
          <input type="text" name="ciudad" className="validate" id="ciudad" placeholder="Ciudad o Estado" />
        </div>
        <div className="input-field col s6">
          <input type="text" name="direccion" className="validate" id="direccion" placeholder="Dirección" />
        </div>
        <div className="input-field col s6">
          <input type="text" name="telefono" className="validate" id="telefono" placeholder="Teléfono" />
        </div>           
        <div className="buttons-container">
          <Link to="/registro" className="blue darken-2 btn buttons-login">Crear Empleo</Link>
        </div>
        <div className="button-regresar">
          <Link to="/empleos" className="btn-regresar blue darken-2 btn-small">Volver</Link>
        </div>
      </form>

    </div>
  </div>
)

export default AddEmpleo