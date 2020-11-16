"use strict";
const movies = ["film1", "film2", "film3"];
movies [3] = "film4";
console.log(movies);
movies [2] ="filmChanged";


//CREAR FUNCIONES
//Opción 1:
function workWithMovies() {
  return movies;
}
//Opción 2: FUNCIÓN ANÓNIMA. El nombre de la función es el de la constante que la contiene. 
const workWithMovies2 = function () {
  return movies;
};
//Opción 3.2. ARROW FUNTION. Función anónima simplificada.

const workWithMovies3 = () => {
  return movies;
};
//Opción 3.2. ARROW FUNTION. Función anónima simplificada sin llaves ni return.
const workWithMovies4 = ()  => movies;


console.log (workWithMovies ());
console.log (workWithMovies2 ());
console.log (workWithMovies3 ());
console.log (workWithMovies4 ());
