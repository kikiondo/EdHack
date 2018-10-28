import React, { Component } from 'react'
import myData from '../../../../data/empleos.json';
import uid from 'uid'
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
     <div className="container">
      <table className="striped">
        <thead>
          <tr>
              <th>Empleos más solicitados!!!</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.empleos.map(empleo =>
              <tr key={uid(2)}> 
                <td>{empleo.item}</td>
              </tr>
            )
          }
        </tbody>
      </table>
     </div>
    )
  }
}

export default ShowEmpleo
