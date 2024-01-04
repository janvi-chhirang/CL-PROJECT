const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyCG2155_91X4NBV9mXk46kpn1n4zjf-OWg",
  authDomain: "authentication-app-95e68.firebaseapp.com",
  databaseURL: "https://authentication-app-95e68-default-rtdb.firebaseio.com",
  projectId: "authentication-app-95e68",
  storageBucket: "authentication-app-95e68.appspot.com",
  messagingSenderId: "130465301604",
  appId: "1:130465301604:web:fdee5501ce3a4599108b71"
 });
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();

   //sign up function
   const signUp=()=>{
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
console.log(email, password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in 
      
      console.log(result)
      location.href = 'signup.html'
      // ...
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message)
      // ..
    });
   }
   //sign In function
   const signIn=()=>{
   const email=document.getElementById("email").value;
   const password=document.getElementById("password").value;
       firebase.auth().signInWithEmailAndPassword(email, password)
     .then((result) => {
       // Signed in
       
         console.log(result)
         location.href = 'topics.html';
       // ...
  })
  .catch((error) => {
    console.log(error.code);
      console.log(error.message)
  });
}