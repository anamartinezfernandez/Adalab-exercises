"use strict";
function getEmoji() {
  fetch("https://api.rand.fun/games/rockpaperscissorslizardspock")
    .then(function (response){
      console.log(response.json ());
      return response.json();
    })
    .then(function (data) {
      console.log (data);
      document.body.innerHTML = data.result});
}
document.body.addEventListener("click", getEmoji);