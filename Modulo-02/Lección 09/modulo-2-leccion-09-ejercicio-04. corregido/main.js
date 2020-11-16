"use strict";


//Array o lista ordenada (es un tipo especial de objeto). Los objetos siempre con llaves. Pueden tener propiedades: antes de los : es la clave/nombre de la propiedad. Lo de después es el valor (puede ser cualquier tipo de dato). Siempre separados por coma. Pueden tener métodos, que son funcines asociadas a la propiedad de un objeto.
const tasks = [
  { name: "Recoger setas en el campo", 
    completed: true },
  { name: "Comprar pilas", 
    completed: true },
  { name: "Poner una lavadora de blancos", 
    completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];


//Paint
function paintTasks (){

  const listElement = document.querySelector(".js-list");
  listElement.innerHTML = " ";
  for (let i = 0; i < tasks.length ; i++) {
    let completedClass;
    let checkAttr;
    if (tasks[i].completed === true){
      completedClass = "completed";
      checkAttr = "checked";

    } else {
      completedClass = " ";
      checkAttr = " ";
    }
  listElement.innerHTML += `<li class = "${completedClass}"> <input type= "checkbox" ${checkAttr} id= "${i}" class = "js-list-check"> <span>${tasks[i].name} </span> </li> `;
  }
}

//Listen events

function toggleTask (ev){
  const clickedId = ev.target.id;
  tasks[clickedId].completed = !tasks [clickedId].completed;
  paintTasks();
  listenEvents();

}

function listenEvents(){
  const checkboxElements = document.querySelectorAll (".js-list-check");
  for (const checkboxElement of checkboxElements){
  checkboxElement.addEventListener ("change", toggleTask);
  }
}

//Start app
paintTasks();
listenEvents();