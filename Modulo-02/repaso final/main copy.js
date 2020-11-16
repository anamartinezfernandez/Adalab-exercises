"use strict";

//DECLARACIÓN DE VARIABLES GLOBALES
const palettesContainer = document.querySelector (".js-palettes-container");


let palettes = []; //defino un array vacío porque estoy viendo en el servidor que es un array con objetos

let favoritesLis = []; //defino el array vacío

//1. Pintar una paleta:

const getData = function(){
	fetch ("https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json")
		.then(function(response){
			//console.log(response);
			return response.json();
		})
		.then(function(data){
			//console.log(data);
			//console.log(data.version);
			//console.log(data.palettes);
			palettes = data.palettes;
			//console.log(palettes);
			console.log ("entro en getdata");
			paintPalettes(); //Mando pintar aquí las paletas, invocando la función, porque me interesa que sea en el momento de haber recogido los datos del servidor y habiéndolos transformado con JSON. No puedo pintar paletas hasta que el servidor no me de una respuesta
			//gracias al for de paintPalettes, pinta todas automáticamente que trae del servidor
			listenPalette(); //lo ideal es ponerla aquí para que cada función haga una cosa. también podríamos ponerlo en paint pero es peor
			setLocalStorage();
		})
}



//podríamos pintar el HTML dentro de la funcion getData, en el 2º then, pero mejor separar por funcionalidades
//en esta funcióin te pinta la estructura cuando arranca la página únicamente. 
function paintPalettes(){ 
	let html = " "; //en la primera iteración va a estar vacío, pero en las posteriores va a tener ya contenido
	//hago un for porque cada vez que quiera coger algo de palettes que es un array, tengo que individualizar


	//TRANSFORMAMOS EL FOR OF EN UN FOR CLÁSICO PARA CREAR UNA I QUE VA CRECIENDO Y SE LO ASOCIAMOS A LA ID (un identificador único a cada li que sea dinámico).

/* for (let i=0; i<palettes.length; i++){
	const element= palettes [i];
	console.log(element); //para ver si me recorre el elemento
} */ //se que funciona así que lo modifico por el de abajo, por el for of

for (let i=0; i<palettes.length; i++){
			//Es bueno pintar cómo quedaría en HTML, en dicho archivo y así luego comparar ocn elements
		let classF;
		const favoriteIndex = favoritesLis.indexOf(clicked);
		const isFavorite = indexFav !== -1;
		if (favorite === true) {//Eso quiere decir que si favorite es igual a -1 no está guardado en el array de favoritos
				class = "palettes__item--favorite"; //esta clase ya la teníamos antes
		}
		else {
			classF= "";
		}
//se lo pongo en li esa clase

		//si el elemento que quiero pintar es un favorito, le añado la clase de css. Si no es favorito le 

		html += `<li class= "js-palette-item ${classF}"> id= "${i}">`;
		html += `<h2 class= "palettes__name">${palettes[i].name}</h2>`;
		html += `<div class= "palettes__colors ">`;

		//los colores están en otro array, por lo que tengo que hacer otro for. En este caso for anidado.
		for (const color of palettes[i].colors){
			html += `<div class="palettes__color" style="background-color: #${color}"></div>`
		}
		html += "</div>";
		html += "</li>";
	}
	//console.log(html);
	palettesContainer.innerHTML = html;
	//console.log ("pintar");
	//console.log ("palette"); Me va a decir que no está definida, porque está dentro del for
}

//Voy haciendo clases de css y luego se las meto en js (palettes__name, palettes__colors, palette__color)

const favoritesPalette = function(ev){
	console.log("escucho evento");
	const clicked = ev.currentTarget.id;
	//opción 1 
/* 	const isFavorite= favoritesLis.find(click =>{return click; }); //no lo entiendo. Se supone que solo le puedes dar una vez a favorito y aquí se repite infinitamente, por lo que tengo que hacer un condicional 
	if (isfavorite === undefined){
		console.log ("lo meto");
		favoritesLis.push(clicked);
	}
	else {
		/* let favoriteIndex = 
		favoritesLis.splice(,1); */
	/*	console.log ("lo quito");
	}
	console.log (favoritesLis);
 */

	//opción 2
	const indexFav = favoritesLis.indexOf(clicked);
	const isFavorite = indexFav !== -1;
	console.log(isFavorite) ;

	//find te devuelve un array pero que es diferente al que habías creado

	if (isfavorite === false){
		console.log ("lo meto");
		favoritesLis.push(clicked);
	}
	else {
		//let favoriteIndex = 
		favoritesLis.splice(indexFav,1); 
		console.log ("lo quito");

	
	}
	paintPalettes();
	listenPalette();
	console.log (favoritesLis);

	//como identificador voy a usar la id = i, para eso tengo que crearlo más arriba

	//tengo que tener un array de favaoritos vacío (arriba como constnate global)

	//cada vez que haga click en un elemento tengo que añadir un elemento al array de favoritos, para ello push:

	//favoritesLis.push(clicked); //le añado al array favoritesLis el elemento que estoy escuchando (clickando)
	//console.log (favoritesLis);

}


function listenPalette(){
	const palettesItem = document.querySelectorAll (".js-palette-item"); //la ponemos aquí y no como constante global apaorque aún no habría cogido la info del servidor
	for (const paletteItem of paletteItems){
		console.log ("ab");
		paletteItem.addEventListener("click", favoritesPalette);
	}
		
}

function setLocalStorage(){
	localStorage.setItem ("palettes", JSON.stringify(palettes));
}

function getLocalStorage() {
	const localPalette = localStorage.getItem('palettes');
	const localPaletteJ = JSON.parse(localPalette);

  if (localPaletteJ !== null) {
    return getData(); //si no hay nada guardado tengo que llamar a getdata()
  } else {
		palettes= localPaletteJ;
		paintPalettes();
		listenPalette();
	  }
}

//Lo que quiero es que la primera vez guarde en el local Storage. LAs siguientes SVGPathSegLinetoVerticalRel, quiere que haga la solicitud en el localstorage para no  tardar Tanto Ya no haría petición al servidor

	//para guardar los favoritos en localstorage, cambiaríamos el array por el de favoritos en esta línea de código y ya

getData(); //esta da igual dónde la pongas porque una vez que ha llamado al servidor ya estaría. Cada vez que cargo la página hace la petición al servidor 
