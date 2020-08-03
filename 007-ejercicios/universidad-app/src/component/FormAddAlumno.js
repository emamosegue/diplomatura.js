import React from "react";

export default class FormAddAlumno extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: null,
      edad: null,
    };
  }

  handleChangeName(e) {
    this.setState({ nombre: e.target.value });
  }

  handleChangeAge(e) {
    this.setState({ edad: e.target.value });
  }

  guardar() {
    const newStudent = {
      nombre: this.state.nombre,
      edad: this.state.edad,
    };
    this.props.agregarAlumno(newStudent);
  }

  render() {
    return (
      <div className="form-row">
        <div className="col-md-3 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre y Apellido"
            value={this.state.nombre}
            onChange={this.handleChangeName.bind(this)}
          ></input>
        </div>
        <div className="col-md-2 mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Edad"
            value={this.state.edad}
            onChange={this.handleChangeAge.bind(this)}
          ></input>
        </div>
        <button
          className="btn btn-success btn-xs"
          onClick={this.guardar.bind(this)}
        >
          Guardar
        </button>
      </div>
    );
  }
}
