$(document).ready(cargarPagina);

function cargarPagina() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAPaoMDqamV0R2uLNgxavCia3xyCib645w",
    authDomain: "proyectodeepdive.firebaseapp.com",
    databaseURL: "https://proyectodeepdive.firebaseio.com",
    projectId: "proyectodeepdive",
    storageBucket: "",
    messagingSenderId: "575651852803"
  };
  firebase.initializeApp(config);

  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var login = document.getElementById('login');
  var signup = document.getElementById('signup');
  var logout = document.getElementById('logout');

  logout.addEventListener('click', function(e) {
    firebase.auth().signOut();
  });
}
