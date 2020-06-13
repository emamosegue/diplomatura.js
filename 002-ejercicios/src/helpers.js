import { database } from './baseDeDatos';

const getItemById = (table, idBuscado) => table.find((tableElement) => tableElementElement.id === idBuscado);
const getItemByNombre = (table, nombreBuscado) => table.find((tableElement) => tableElement.nombre === nombreBuscado);
const getTableByNombre = (tableName) => {return database[tableName]};

function getMaxIdFromTable(table){
  let maxId = 0;
  table.forEach( item => { if (item.id > maxId)  { maxId = item.id; } } )
  return maxId;
}

function addItemByTable(itemName, table){
    let newItem = new Object();
    newItem.id = helpers.getMaxId(table)+1;
    newItem.nombre = itemName;
    database[table].push(newItem);
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

  database.alumnos.map( )
}

export const helpers = {
  getUniversidadById : (idUniversidad) => getItemById(database.universidad,idUniversidad),
  getProfesorById : (idProfesor) => getItemById(database.profesores,idProfesor),
  getMateriaById : (idMateria) => getItemById(database.materias,idMateria),
  getMaxId : (tableName) => getMaxIdFromTable(getTableByNombre(tableName)),
  addItem : (itemName, table) => addItemByTable(itemName, table),
  getInfoByMateria : (idMateria) => getInfoByMateriaPrivate(idMateria),
  getAllInfoAlumnos : () =>  getInfoAlumnosPrivate(),
};
