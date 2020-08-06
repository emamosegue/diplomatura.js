import React from "react";
import "./App.css";
import ListadoAlumnos from "./component/ListadoAlumnos";
import ListadoCalificaciones from "./component/ListadoCalificaciones";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vistaActual: null,
    };
  }

  setVistaActual(vistaActual) {
    const newState = { vistaActual };
    this.setState(newState);
  }

  mostrarVista() {
    return this.state.vistaActual === "alumnos" ? (
      <ListadoAlumnos />
    ) : this.state.vistaActual === "calificaciones" ? (
      <ListadoCalificaciones />
    ) : (
      console.log("Aun no implementado")
    );
  }

  render() {
    const vistaActual = <div>ToDo</div>;
    return (
      <div className="App">
        <header className="alert alert-info">Diplomatura JS</header>
        <div id="botonera">
          <button
            className="btn btn-outline-info"
            onClick={() => this.setVistaActual("alumnos")}
          >
            Alumnos
          </button>
          <button
            className="btn btn-outline-info"
            onClick={() => this.setVistaActual("profesores")}
          >
            Profesores
          </button>
          <button
            className="btn btn-outline-info"
            onClick={() => this.setVistaActual("materias")}
          >
            Materias
          </button>
          <button
            className="btn btn-outline-info"
            onClick={() => this.setVistaActual("calificaciones")}
          >
            Calificaciones
          </button>
        </div>
        <div className="mainView">{this.mostrarVista()}</div>
      </div>
    );
  }
}

export default App;
