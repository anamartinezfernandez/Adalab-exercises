"use strict";

//declaración de variables globales

const input = document.querySelector(".js-input");
const text = document.querySelector(".js-text");

//diagrama de flujo cuando la usuaria hace un evento

function writeText() {
	text.innerHTML = input.value;
	const textSave = text.innerHTML;
	localStorage.setItem("textInStorage", textSave); //textInStorage es un nombre que nosotras le damos
	console.log(textSave);
}

//diagrama de flujo al arrancar la página

function getTextFromLocalStorage() {
	const storageText = localStorage.getItem("textInStorage");
	if (storageText !== null) {
		input.value = storageText;
		text.innerHTML = storageText;
	}
}

input.addEventListener("keyup", writeText);

getTextFromLocalStorage();