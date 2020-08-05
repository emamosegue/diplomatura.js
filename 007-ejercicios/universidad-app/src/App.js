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

  setVistaActual(nuevaVista) {
    const newState = { vistaActual: nuevaVista };
    this.setState(newState);
  }

  mostrarVista() {
    if (this.state.vistaActual === "alumnos") return <ListadoAlumnos />;
    if (this.state.vistaActual === "calificaciones")
      return <ListadoCalificaciones />;
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
