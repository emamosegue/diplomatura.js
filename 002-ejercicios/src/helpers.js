import { database } from './baseDeDatos';

const getItemById = (table, idBuscado) => table.find((tableElement) => tableElementElement.id === idBuscado);
const getItemByNombre = (table, nombreBuscado) => table.find((tableElement) => tableElement.nombre === nombreBuscado);
const getTableByNombre = (tableName) => {return database[tableName]};

function getMaxIdFromTable(table){
  let maxId = 0;
  table.forEach( item => { if (item.id > maxId)  { maxId = item.id; } } )
  return maxId;
}

function addItemByTable(itemName, tableName){
    let newItem = new Object();
    newItem.id = helpers.getMaxId(tableName)+1;
    newItem.nombre = itemName;
    database[tableName].push(newItem);
    return newItem.id;
  }

function getInfoByMateriaPrivate(idMateria){
    return {
     universidad : database.materias.find( materia => materia.id === idMateria).universidad,
     profesores : database.materias.find( materia => materia.id === idMateria).profesores.map(
       function (profesor){
         return database.profesores.find((profesorBD) => profesorBD.id === profesor)
       }
     )}
}

function getInfoAlumnosPrivate(){
  let ret = 'NOTAS DE ALUMNOS\n'+
  '----------------\n';
  for (let i =0;i<database.alumnos.length;i++){
    ret += database.alumnos[i].nombre.toUpperCase() + '\n';
    for (let j =0;j<database.alumnos.length;j++){
      if (database.calificaciones[j].alumno === database.alumnos[i].id){
        ret += database.materias.find( materia => materia.id === database.calificaciones[j].materia).nombre + ':' + database.calificaciones[j].nota + '\n';
      }
    }
  }
  return ret;  
}

function addAlumnoAndMateriaPrivate(alumnoN,materiaN,nota){
  let newItem = '';
  let msj = '';
  if (!database.alumnos.find(alumnoTable => alumnoTable.nombre === alumnoN)){
    console.log('Alumno no encontrado, se agrega a la tabla con ID: ' + addItemByTable(alumnoN,'alumnos'));
  }
  if (!database.materias.find(materiaTable => materiaTable.nombre === materiaN)){
    console.log('Materia no encontrada, se agrega a la tabla con ID: ' + addItemByTable(materiaN,'materias'));
  }
  newItem = {
    alumno : database.alumnos.find( alumnoTable => alumnoTable.nombre === alumnoN).id,
    materia : database.materias.find( materiaTable => materiaTable.nombre === materiaN).id,
    nota : nota
  }
  if (database.calificaciones.push(newItem)){
    msj += 'Se agrega la calificacion exitosamente!';
  }
  else{
    msj += 'Ha ocurrido un error al agregar la calificacion';
  }
  console.log(msj);
}

export const helpers = {
  getUniversidadById : (idUniversidad) => getItemById(database.universidad,idUniversidad),
  getProfesorById : (idProfesor) => getItemById(database.profesores,idProfesor),
  getMateriaById : (idMateria) => getItemById(database.materias,idMateria),
  getMaxId : (tableName) => getMaxIdFromTable(getTableByNombre(tableName)),
  addItem : (itemName, tableName) => addItemByTable(itemName, tableName),
  getInfoByMateria : (idMateria) => getInfoByMateriaPrivate(idMateria),
  getAllInfoAlumnos : () =>  getInfoAlumnosPrivate(),
  addAlumnoAndMateria : (nombreAlumno, nombreMateria, notaMateria) => addAlumnoAndMateriaPrivate(nombreAlumno, nombreMateria, notaMateria),
};