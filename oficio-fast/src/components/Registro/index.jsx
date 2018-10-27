import React, {Component} from 'react'
import Form from './Form'

class Registro extends Component {
  constructor(){
    super()

    this.state = {
      user: {}
    }

    this.handleOnAddFrom = this.handleOnAddFrom.bind(this)
  }

  handleOnAddFrom(e){
    e.preventDefault()
    let form = e.target,
      user = {
        id: form.id.value,
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
        school: form.school.value
      }

      this.setState({user})
    form.reset()
  }

  render(){
    return(
      <div className='container'>
        <Form onAddCourse={this.handleOnAddFrom} />
        {console.log(this.state.user)}
      </div>
    )
  }
}

export default Registro