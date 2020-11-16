"use strict";

const tasks = [
  {
    name: 'Recoger setas en el campo',
    completed: false
  },
  {
    name: 'Comprar pilas',
    completed: false
  },
  {
    name: 'Poner una lavadora de blancos',
    completed: true
  },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: true
  }
];



//pintar las tareas

const paintTasks = function(){
  const listElement = document.querySelector (".js-list");
  listElement.innerHTML = '';
  /* for (const task of tasks){
    console.log(task);
    listElement.innerHTML += `<li>${task.name}</li>`;
  } */
    for (let i= 0; i<tasks.length; i++){
      let completedClass;
      let checkAttr;
      if (tasks[i].completed === true){
        completedClass = "completed";
        checkAttr = "checked";
      } else{
        completedClass = "";
        checkAttr = "";
      }

    listElement.innerHTML += `<li class= ${completedClass}><input type = "checkbox" ${checkAttr} class= "js-list-chek id= "${i}> <span>${tasks[i].name}</span></li>`;
  }
}
paintTasks();