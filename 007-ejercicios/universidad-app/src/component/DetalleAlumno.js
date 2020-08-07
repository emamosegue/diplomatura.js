import React, { Component } from "react";

export default class DetalleAlumno extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const alumno = this.props.alumno;
    return (
      <div className="alert alert-primary d-md-inline-flex justify-content-center">
        <div className="row w-200" key={alumno.id}>
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
