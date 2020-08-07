import React, { Component } from "react";

export default class DetalleAlumno extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const calificacion = this.props.calificacion;
    return (
      <div className="alert alert-primary d-flex flex-column justify-content-center">
        <div className="row w-300" key={calificacion.id}>
          <div className="col-3">
            <strong className="mr-1">Alumno: </strong> {calificacion.alumno}
          </div>
          <div className="col-3">
            <strong className="mr-1">Materia: </strong> {calificacion.materia}
          </div>
          <div className="col-3">
            <strong className="mr-1">Nota: </strong> {calificacion.nota}
          </div>
        </div>
      </div>
    );
  }
}
