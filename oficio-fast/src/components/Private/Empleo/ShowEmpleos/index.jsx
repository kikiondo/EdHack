import React, { Component } from 'react'
import { createEmpleoInDB } from '../../../helpers/'
import myData from '../../../../data/empleos.json';

class ShowEmpleo extends Component {
  constructor()
  {
    super() 
    this.state={
      data: myData.columns,
      empleos: null
    }
    this.fetchEmpleos = this.fetchEmpleos.bind(this) 
  }

  componentWillMount (){
    this.fetchEmpleos () 
  }

  fetchEmpleos () {
    this.state.data.map((objeto) => {
      if(objeto.id === 343627767) {
       this.setState({ empleos: objeto.cachedContents.top})
      }
    })
  }

  render() {
    return(
     <div>
       {
        //console.log(`hola soy el estado ${this.state.empleos}`)
        this.state.empleos.map(empleo => 
          <div>
            <span>{empleo.item}</span>
          </div>
        )
       }
     </div>
    )
  }
}

export default ShowEmpleo
