import React, { Component } from "react";
import datos from "../datos/index";

export default class DetalleAlumno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alumnos: datos.alumnos,
    };
  }

  buscarAlumno(idAlumno) {
    return this.state.alumnos.find((alumno) => alumno.id === idAlumno);
  }

  render() {
    const alumno = this.buscarAlumno(this.props.idSeleccionado);
    if (alumno) {
    }
    return (
      <div className="alert alert-primary d-flex justify-content-center">
        <div className="row w-100" key={alumno.id}>
          <div className="col-4">
            <strong className="mr-1">Id: </strong> {alumno.id}
          </div>
          <div className="col-4">
            <strong className="mr-1">Nombre: </strong> {alumno.nombre}
          </div>
          <div className="col-4">
            <strong className="mr-1">Edad: </strong> {alumno.edad}
          </div>
        </div>
      </div>
    );
  }
}
