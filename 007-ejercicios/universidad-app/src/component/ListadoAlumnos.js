import React, { Component } from "react";
import datos from "../datos/index";
import FormAddAlumno from "./FormAddAlumno";
import DetalleAlumno from "./DetalleAlumno";

export default class ListadoAlumno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vistaActual: "lista",
      alumnoSeleccionado: null,
      alumnos: datos.alumnos,
    };
  }

  setVistaActual(nuevaVista, alumno) {
    const newState = {
      vistaActual: nuevaVista,
      alumnoSeleccionado: alumno,
    };
    this.setState(newState);
  }

  getListaAlumnos() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Edad</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {this.state.alumnos.map((element) => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.nombre}</td>
              <td>{element.edad}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-info"
                  onClick={() => this.setVistaActual("detalle", element)}
                >
                  Ver
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => this.borrarAlumno(element)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  agregarAlumno = (nuevoAlumno) => {
    const newId = this.state.alumnos.length + 1;
    nuevoAlumno.id = newId;
    this.setState({ alumnos: [...this.state.alumnos, nuevoAlumno] });
  };

  borrarAlumno(alumno) {
    const newAlumnos = [...this.state.alumnos];
    const index = newAlumnos.indexOf(alumno);
    newAlumnos.splice(index, 1);
    this.setState({ alumnos: newAlumnos });
  }

  render() {
    if (this.state.vistaActual === "lista") {
      return (
        <div>
          <FormAddAlumno agregarAlumno={this.agregarAlumno} />
          {this.getListaAlumnos()}
        </div>
      );
    } else if (this.state.vistaActual === "detalle") {
      return (
        <div>
          <DetalleAlumno alumno={this.state.alumnoSeleccionado} />
        </div>
      );
    }
  }
}
