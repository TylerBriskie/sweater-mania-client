const API_URL = getHostUrl();

$(document).ready(function(){

 let user_id = parseQuery(window.location.search);
 console.log(user_id)
 findUser(user_id)
 .then(addUserInfoToPage)
 .then(getSweaters)
 .then(addSweaters)
});

//===================
//-----functions-----
//===================


function getHostUrl(){
  if (window.location.host.indexOf('localhost') != -1) {
    return 'http://localhost:3000';
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


function addUserInfoToPage(user) {
  let source = $("#user-template").html();
  let template = Handlebars.compile(source);
  let context = user;
  let html = template(context);
  $('.users').html(html);
  return user.id;
}

function getSweaters(id){
  return $.get(`${API_URL}/users/${id}/sweaters`)
}

function addSweaters(sweaters){
  let source = $('#sweater-template').html();
  let template = Handlebars.compile(source);
  let context = {sweaters};
  let html = template(context);
  $('.sweaters').append(html);
}

function weReallySuck(){
  alert('user not found, dumb shit');
}
