import React, { Component } from "react";
import datos from "../datos/index";
import FormAddCalificacion from "./FormAddCalificacion";

export default class Calificaciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idSelected: null,
      calificaciones: datos.calificaciones,
      alumnos: datos.alumnos,
      materias: datos.materias,
    };
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
            <tr key={calificacion.alumno}>
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
                  onClick={() => console.log("ver")}
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
    const getListaCalificaciones = this.getListaCalificaciones();
    return (
      <div>
        <FormAddCalificacion />
        {getListaCalificaciones}
      </div>
    );
  }
}
