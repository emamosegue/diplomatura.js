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

  delete(alumno) {
    const index = datos.alumnos.indexOf(alumno);
    if (index > -1) datos.alumnos.splice(index, 1);
    this.setVistaActual("lista");
  }

  getListaAlumnos() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {datos.alumnos.map((element) => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.nombre}</td>
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
                  onClick={() => this.delete(element)}
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

  // agregarAlumno(nuevoAlumno) {
  //   const newId = this.state.alumnos.length + 1;
  //   nuevoAlumno.id = newId;
  //   this.state.alumnos.push(nuevoAlumno);
  //   this.setVistaActual("lista");
  // }
  //cuando llamo, tengo que hacerlo this.agregarAlumno.bind(this)

  agregarAlumno = (nuevoAlumno) => {
    const newId = this.state.alumnos.length + 1;
    nuevoAlumno.id = newId;
    this.setState({ alumnos: [...this.state.alumnos, nuevoAlumno] });
    console.log(this.state.alumnos);
    this.setVistaActual("lista");
  };

  render() {
    if (this.state.vistaActual === "lista") {
      const ListadoAlumno = this.getListaAlumnos();
      return (
        <div>
          <FormAddAlumno agregarAlumno={this.agregarAlumno} />
          {ListadoAlumno}
        </div>
      );
    } else if (this.state.vistaActual === "detalle") {
      return (
        <div>
          <DetalleAlumno alumno={this.state.alumnoSeleccionado}></DetalleAlumno>{" "}
        </div>
      );
    }
  }
}
