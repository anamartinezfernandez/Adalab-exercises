'use strict';

const promos = [
  {
    promo: 'A',
    name: 'Ada',
    students: [
      {
        id: 'id-1',
        name: 'Sofía',
        age: 20
      },
      {
        id: 'id-2',
        name: 'María',
        age: 21
      },
      {
        id: 'id-3',
        name: 'Lucía',
        age: 22
      }
    ]
  },
  {
    promo: 'B',
    name: 'Borg',
    students: [
      {
        id: 'id-4',
        name: 'Julia',
        age: 23
      },
      {
        id: 'id-5',
        name: 'Tania',
        age: 24
      },
      {
        id: 'id-6',
        name: 'Alaia',
        age: 25
      }
    ]
  },
  {
    promo: 'C',
    name: 'Clarke',
    students: [
      {
        id: 'id-7',
        name: 'Lidia',
        age: 26
      },
      {
        id: 'id-8',
        name: 'Celia',
        age: 27
      },
      {
        id: 'id-9',
        name: 'Nadia',
        age: 28
      }
    ]
  }
];

const studentsWorkingInGoogle = ['id-2', 'id-3', 'id-5', 'id-9'];

const result = document.querySelector (".js-result");
result.innerHTML += `<ul class="js-list">`;
const resultList = document.querySelector (".js-list");


//4 Pintar en pantalla los nombres de las promos y los nombres y la edad de las alumnas
let name = "";
const paintLetters = function() {
  for (let promo of promos) {
    name += `<li><p>Nombre: ${promo.name}</p> <ul>`;
   /*  console.log (promo.name); */
    
   for (let participante of promo.students) { 
     /*  console.log (participante.id,  participante.name); */
      name += `<li>${participante.name} , ${participante.age} </li>`;
    } 
  name += `</ul> </li> </ul>`;
       
  }
  resultList.innerHTML = name;
}

paintLetters();  