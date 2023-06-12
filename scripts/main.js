document.addEventListener("DOMContentLoaded", function() {
    
    const nome = document.getElementById("nome");
    const userName = document.getElementById("nome-usuario");
    const repos = document.getElementById("rep");
    const seguidores = document.getElementById("seguidores");
    const seguindo = document.getElementById("seguindo");
    const link = document.getElementById("link");
    const avatar = document.getElementById("avatar");

 fetch('https://api.github.com/users/EdvanSilva33')
 .then(function(res){
   return res.json();

 }).then(function(json){
     seguidores.innerText = json.followers;
     seguindo.innerText = json.following;
     nome.innerText = json.name;
     userName.innerText = json.login;
     avatar.src = json.avatar_url;
     repos.innerText = json.public_repos;
     link.href =json.html_url;



 });
 


});



