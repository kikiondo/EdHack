import React from 'react'
import uid from 'uid'

const Formulario = ({onAddCourse}) => (
  <form onSubmit={onAddCourse}>
     <input type="hidden" name="id" value={uid(10)} />

    <label htmlFor="Name">Nombre</label>
    <input name="name" placeholder="Nombre" id="Name" type="text" className="validate" required/>

    <label htmlFor="Email">Correo</label>
    <input name="email" placeholder="Correo" id="Email" type="email" className="validate" required/>

    <label htmlFor="Password">Contraseña</label>
    <input name="password" placeholder="Contraseña" id="Password" type="password" className="validate" required/>

    <label htmlFor="School">Escolaridad</label>
    <input name="school" placeholder="Escolaridad" id="School" type="text" className="validate" required/>

    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
      <i className="material-icons right">send</i>
    </button>
  </form>
)

export default Formulario