"use strict";


/* 
La URL base del API: https://swapi.dev/
Si necesita autenticación: no
Método HTTP que deben usar las peticiones a este API
URL para acceder a la info del personaje "Luke Skywalker": GET
URL para acceder a la info de la película "A New Hope": http://swapi.dev/api/films/1/
A qué otros recursos puedo acceder desde el API además de personajes y pelis: species, vhicles, starships
URL para acceder al listado de personajes, ¿está paginada?: si, hay que añadir people/?page=3
cómo puedo buscar personajes mediante la URL
cómo puedo hacer que el JSON de una petición se me devuelva traducido a Wookiee */

function getNameLuke() {
  fetch("https://swapi.co/api/people/1")
    .then(function(response) {
      return response.json();
  })
    .then(function(data) {
      document.body.innerHTML = data.name;
  });
}
document.body.addEventListener("click", getNameLuke());