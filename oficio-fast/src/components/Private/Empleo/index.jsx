import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import './empleo.css'
import KawaiiAnimation from "./KawaiiAnimation"
import Information from '../Information'

class Empleo extends Component{
  constructor(){
    super()
    this.state={}
  }

  render() {
    return(
    <Fragment>
      <div className="Container-Empleo">
          <h3 className="Empleo-Title">¿Qué necesitas?</h3>
          <div className="Container-Kawaii">
            <KawaiiAnimation />
            <p>Busca nuevas oportunidades y explota tus talentos o ayúdanos a cambiar la vida de las personas.</p>
          </div>
          <div className="Container-Buttons container">
            <Link to="/buscarempleo" className="link btn waves-effect blue darken-2">Buscar Empleo</Link>
            <Link to="/crearempleo" className="link btn waves-effect blue darken-2">Crear Empleo</Link>
          </div>
      </div>
      <Information />
     </Fragment>
    )
  }
}

export default Empleo