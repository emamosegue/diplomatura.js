import React, { Component } from "react";
import datos from "../datos/index";
import FormAddCalificacion from "./FormAddCalificacion";
import DetalleCalificacion from "./DetalleCalificacion";

export default class Calificaciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vistaActual: "lista",
      calificaciones: datos.calificaciones,
      calificacionSeleccionada: null,
      alumnos: datos.alumnos,
      materias: datos.materias,
    };
  }

  setVistaActual(nuevaVista, calificacion) {
    const newState = {
      vistaActual: nuevaVista,
      calificacionSeleccionada: calificacion,
    };
    this.setState(newState);
  }

  getListaCalificaciones() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Alumno</th>
            <th scope="col">Materia</th>
            <th scope="col">Calificacion</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {datos.calificaciones.map((calificacion) => (
            <tr key={calificacion.id}>
              <td>
                {
                  datos.alumnos.find(
                    (alumno) => calificacion.alumno === alumno.id
                  ).nombre
                }
              </td>
              <td>
                {
                  datos.materias.find(
                    (materia) => calificacion.materia === materia.id
                  ).nombre
                }
              </td>
              <td>{calificacion.nota}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-info"
                  onClick={() => this.setVistaActual("detalle", calificacion)}
                >
                  Ver
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => console.log("eliminar")}
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

  render() {
    const ListaCalificaciones = this.getListaCalificaciones();
    if (this.state.vistaActual === "lista") {
      return (
        <div>
          <FormAddCalificacion />
          {ListaCalificaciones}
        </div>
      );
    } else if (this.state.vistaActual === "detalle") {
      return (
        <div>
          <DetalleCalificacion
            calificacion={this.state.calificacionSeleccionada}
          />
        </div>
      );
    }
  }
}
