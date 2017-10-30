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
  // evento onclick para boton de login
  login.addEventListener('click', function(e) {
    // valores de inputs
    var mailValue = email.value;
    var passValue = password.value;
    var auth = firebase.auth();
    // sign in
    var promise = auth.signInWithEmailAndPassword(mailValue, passValue);
    promise.catch(e => alert(e.message));
  });
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      console.log(firebaseUser);
      login.addEventListener('click',function(e){
        window.location.href="assets/views/Insights.html";
      })
    }else{
      console.log("no logueado");
    }
  })
}
