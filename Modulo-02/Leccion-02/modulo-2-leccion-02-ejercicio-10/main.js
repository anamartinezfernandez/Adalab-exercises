"use strict";
debugger; /* La sentencia debugger invoca cualquier funcionalidad de depuración disponible, tiene la misma función que un breakpoint. Si la funcionalidad de depuración no está disponible, esta sentencia no tiene efecto alguno. Cuando el depurador es invocado, la ejecución se detiene en la sentencia debugger. Es como un punto de interrupción en el script. Esta sentencia lo que nos permite es especificar en el código la línea exacta donde queremos que se detenga nuestra aplicación web para ser depurada.*/
const name = "Emma";
const text = document.querySelector(".text");
text.innerHTML = `<p> El nombre de mi compañera es ${name} , y está compuesto por ${name.length} caracteres.</p>`;
