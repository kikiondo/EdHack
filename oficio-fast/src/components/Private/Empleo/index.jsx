import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './empleo.css'
import KawaiiAnimation from "./KawaiiAnimation"

class Empleo extends Component{
  constructor(){
    super()
    this.state={}
  }

  render() {
    return(
      
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

    )
  }
}

export default Empleo