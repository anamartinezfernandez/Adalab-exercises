"use strict";


const btn = document.querySelector(".js-btn");
const repoList = document.querySelector('.js-repo-list');

function findRepos() {
  let input = document.querySelector (".js-text").value;
  fetch(`https://api.github.com/orgs/${input}`)
  .then (function(response){
    return response.json();
  })
  .then (function(data){
    console.log (data);
    const org = data.repos_url;
    return fetch(org);
  })
  .then (function(reposReponse) {
    return reposReponse.json();
  })
  .then (function (reposData){
    for (let repo of reposData){
      const elementLi = document.createElement ("li");
      elementLi.innerHTML = repo.name;
      repoList.appendChild(elementLi);
      /* repoList.innerHTML += `<li>${repo.name}</li>`;*/
    } 
  });
}

btn.addEventListener ("click", findRepos);