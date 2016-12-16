// const API_URL = getHostUrl();

$(document).ready(function(){

 let queryString = parseQuery(window.location.search);

console.log(queryString);

});

function parseQuery(query) {
return query.split('=')[1];
};
