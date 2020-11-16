"use strict";

//declaración de variables globales

const nameInput = document.querySelector(".js-name-input");
const surnameInput = document.querySelector(".js-surname-input");

//Empiezo con el diagrama de flujo cuando la usuaria hace un evento

function writeText() {
	//declaro el objeto que quiero guardar en Local Storage
	const data = {
		name: nameInput.value,
		surname: surnameInput.value
	};
	localStorage.setItem ("textInStorage", data);
	
	//convierto objeto en string
	
	const stringData = JSON.stringify (data);
	console.log(stringData);
}

//Continúo con el diagrama de flujo al arrancar la página

function getTextFromLocalStorage() {
	//leo los datos del local Storage en formato string

	const stringUser = localStorage.getItem("textInStorage");

	//paso los datos de string a objeto

	const user = JSON.parse (stringUser);

	//compruebo si el objeto tiene información útil

	if (user !== null) {
		nameInput.value = user.name;
		surnameInput.value = user.surname;
	}
}

//llamo al evento

input.addEventListener("keyup", writeText);

//ejecuto la función

getTextFromLocalStorage();