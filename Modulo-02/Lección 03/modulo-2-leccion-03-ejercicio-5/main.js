"use strict";
let notification = document.querySelector(".section");
let title = document.querySelector(".section-title");
let text = document.querySelector(".section-text");
if (notification.classList.contains("warning")) {
  title.innerHTML = "AVISO";
  text.innerHTML = "Tenga cuidado";
} else if (notification.classList.contains("error")) {
  title.innerHTML = "ERROR";
  text.innerHTML = "Ha surgido un error";
} else if (notification.classList.contains("success")) {
  title.innerHTML = "CORRECTO";
  text.innerHTML = "Los datos son correctos";
}
