materias.map((materia) => {
  materia.profesores.map((idProfesor) =>
    profesores.find((profesor) => profesor.id === idProfesor)
  );
});
