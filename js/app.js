const loader = document.getElementById('loader');
const status = document.getElementById('status');

setTimeout(function () {
    loader.style.display = 'none';
    status.style.display = 'none';
},1000);
 
 const login = ()=>{
     const email = document.getElementById('email').value;
     const password = document.getElementById('password').value;
     firebase.auth().signInWithEmailAndPassword(email, password)
     .then((result)=>{
         let session = result.user.email;
        document.getElementById('succcess').innerHTML = "Login Success !";
        setTimeout(()=> window.location.assign('index.html'),1000);
     })
     .catch(function(error){
         // Handle Errors here.
         var errorCode = error.code;
         document.getElementById('succcess').innerHTML = errorCode;
         // ...
       });
 }




function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value
     firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>console.log('register success'))
     .catch(function(error) {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         // ...
         console.log(errorMessage);
       });
 }
 
