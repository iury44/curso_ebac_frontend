import * as elementos from './elementos.js'
document.addEventListener('DOMContentLoaded',()=>{
  Api()
})




const repositorio = document.getElementById('count-repositorio');
const seguidores = document.getElementById('count-seguidores');
const seguindo = document.getElementById('count-seguindo');

const profileAvatar = document.getElementById('profile__avatar')
const profileName = document.getElementById('profile__name')
const profileUsername = document.getElementById('profile__username')

function Api() {  
  const endpoint = `https://api.github.com/users/iury44`;
  console.log('Endpoint:', endpoint);

  fetch(endpoint)
    .then(response => {
      return response.json();
    })
    .then(data =>{
       const {login,name,public_repos,followers,following,avatar_url} = data
      profileName.innerHTML = name
      profileUsername.innerHTML = login
      profile__avatar.src = avatar_url
      repositorio.innerText = public_repos;
      seguidores.innerText = followers.toString();
      seguindo.innerText = following.toString();
      
      // console.log(login,name,public_repos,followers,following)
    })
    .catch(error => {
      console.error('Erro ao buscar dados:', error);
    });
}
