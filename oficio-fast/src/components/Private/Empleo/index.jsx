import React, { Component } from 'react'
import AddEmpleo from './AddEmpleo'

class Empleo extends Component{
  constructor(){
    super()
    this.state={}
  }

  render() {
    return(
      <div>
        <AddEmpleo />
      </div>
      
    )
  }
}

export default Empleo