import React, { Component } from "react";
import datos from "../datos/index";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

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
        <DropdownButton id="dropdown-variants-Secondary" title="Alumno">
          {this.state.alumnos.map((alumno) => (
            <Dropdown.Item as="button">{alumno.nombre}</Dropdown.Item>
          ))}
        </DropdownButton>
        <DropdownButton id="dropdown-item-button" title="Materia">
          {this.state.materias.map((materia) => (
            <Dropdown.Item as="button">{materia.nombre}</Dropdown.Item>
          ))}
        </DropdownButton>
        <div className="col-md-2 mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Calificacion"
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
