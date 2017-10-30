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
  var ret = document.getElementById('return')
  // evento signup
  signup.addEventListener('click', function(){
    var mailValue = email.value;
    var passValue = password.value;
    var auth = firebase.auth();

    var promise = auth.createUserWithEmailAndPassword(mailValue, passValue);
    promise.catch(e => alert(e.message));
  });

  ret.addEventListener('click',function(e){
    firebase.auth().signOut();
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      console.log(firebaseUser);
      ret.classList.remove('hide');
    }else{
      ret.classList.add('hide');
    }
  })
};
