import React, { Component } from "react";
import datos from "../datos/index";

export default class Calificaciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idSelected: null,
      calificaciones: datos.calificaciones,
      alumnos: datos.alumnos,
      materias: datos.materias,
      nuevoAlumno: null,
      nuevaMateria: null,
      nuevaCalificacion: null,
    };
  }

  handleChangeCalificacion(e) {
    this.setState({ nuevaCalificacion: e.target.value });
  }

  render() {
    return (
      <div className="form-row">
        <div class="dropdown">
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {this.state.alumnos.map((alumno) => (
              <a class="dropdown-item" href="#">
                {alumno.nombre}
              </a>
            ))}
          </div>
        </div>
        <div class="dropdown">
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {this.state.materias.map((materia) => (
              <a class="dropdown-item" href="#">
                {materia.nombre}
              </a>
            ))}
          </div>
        </div>
        <div className="col-md-2 mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Calificacion"
            value={this.state.edad}
            onChange={this.handleChangeCalificacion.bind(this)}
          ></input>
        </div>
        <button className="btn btn-success btn-xs" onClick={console.log("asd")}>
          Guardar
        </button>
      </div>
    );
  }
}
