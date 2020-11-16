"use strict";

const userName = document.querySelector(".js-user_name");
const numberRepos = document.querySelector(".js-number_repos");
const imgAvatar = document.querySelector(".js-img_avatar");
const btn = document.querySelector(".js-btn");


function getUser() {
  let text = document.querySelector(".js-text").value;
  fetch (`https://api.github.com/users/${text}`)
  .then (function (response) {
    console.log(response.json);
    return response.json();
  })
  .then (function (data){
    console.log(data);
    userName.innerHTML = data.name;
    numberRepos.innerHTML = data.public_repos;
    imgAvatar.src = data.avatar_url;
  })
  .catch (function (error) {
    console.log (error);
  })
}
btn.addEventListener ("click", getUser);
