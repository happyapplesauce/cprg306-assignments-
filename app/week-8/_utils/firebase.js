// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArf-0XNxH9o5G32hRtzwejTfNLOZBEPy0",
  authDomain: "shoppinglist-6a2b8.firebaseapp.com",
  projectId: "shoppinglist-6a2b8",
  storageBucket: "shoppinglist-6a2b8.appspot.com",
  messagingSenderId: "120518265090",
  appId: "1:120518265090:web:8d8536e67b27661f96da1b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log("Firebase Initialized: ", app);

export {auth};