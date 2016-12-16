const API_URL = getHostUrl();

$(document).ready(function(){

 let user_id = parseQuery(window.location.search);
 // GET REQUEST
 findUser(user_id)

});

//===================
//-----functions-----
//===================


function getHostUrl(){
  if (window.location.host.indexOf('localhost') != -1) {
    return 'localhost:3000';
  } else {
    return 'https://sweater-mania.herokuapp.com/';
  }
};

function parseQuery(query) {
return query.split('=')[1];
};



function findUser(id){
  return $.get(`${API_URL}/users/${id}`)

}
function addUserInfoToPage(user){
  
}

function displaySweaters(data) {

}
