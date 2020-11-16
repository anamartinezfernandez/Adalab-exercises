"use strict";
const getCharacter = function (){
  const character = document.querySelector(".js-character").value;
  console.log ("entro");
  return `https://swapi.dev/api/people/?search=${character}`;
};

const listCharacter = document.querySelector (".js-list");
const getCharacterInfo = function() {
  fetch(`${getCharacter()}`)
    .then (function(response){
      return response.json ();
    })
    .then(function(data){
      for (let i= 0; i < data.results.length; i++){
        const nameCharacter = data.results[i].name;
        const genderCharacter = data.results[i].gender;
        listCharacter.innerHTML += `<li>${nameCharacter} ${genderCharacter} </li>`;
      } 
    });
};
const btn = document.querySelector(".js-search");
btn.addEventListener("click", getCharacterInfo);

/* ??results
¿cómo hacer con la url? */