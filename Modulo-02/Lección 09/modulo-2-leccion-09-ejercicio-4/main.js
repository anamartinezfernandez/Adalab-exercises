"use strict";

const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];



for (let task of tasks) {
  const list =  document.querySelector (".list");


  const elementLi = document.createElement ("li");
  elementLi.innerHTML = task.name;
  list.appendChild (elementLi);

  const elementCheckbox = document.createElement ("input");
  elementCheckbox.setAttribute ("type", "checkbox");
  elementCheckbox.classList.add ("checkbox");
  elementLi.appendChild (elementCheckbox);


  if (task.completed === true) {
  elementLi.classList.add("crossed-task");
  elementCheckbox.setAttribute ("checked", "true") ;
} 
  const checkTask = function (){
  if (elementCheckbox.checked){
    task.completed = true;
    elementLi.classList.add("crossed-task");
  }
} 
elementCheckbox.addEventListener ("change", checkTask);
}
