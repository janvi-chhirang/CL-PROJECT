
import { initializeApp } from "firebase/app";
import { getFirestore } from'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCG2155_91X4NBV9mXk46kpn1n4zjf-OWg",
  authDomain: "authentication-app-95e68.firebaseapp.com",
  databaseURL: "https://authentication-app-95e68-default-rtdb.firebaseio.com",
  projectId: "authentication-app-95e68",
  storageBucket: "authentication-app-95e68.appspot.com",
  messagingSenderId: "130465301604",
  appId: "1:130465301604:web:fdee5501ce3a4599108b71"
};

export const app =initializeApp(firebaseConfig);
export const databse = getFirestore(app);
