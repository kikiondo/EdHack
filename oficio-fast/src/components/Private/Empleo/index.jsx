import React, { Component } from 'react'
import './empleo.css'
import KawaiiAnimation from "./KawaiiAnimation";

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
          <button className="btn waves-effect blue darken-2">Buscar empleo</button>
          <button className="btn waves-effect blue darken-2">Publicar empleo</button>
        </div>
     </div>
    )
  }
}

export default Empleo