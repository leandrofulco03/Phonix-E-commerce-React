// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpl5wJRVQe8HG5lcQVmKZUYzFGAFxXgKQ",
  authDomain: "phonix-ecommerce.firebaseapp.com",
  projectId: "phonix-ecommerce",
  storageBucket: "phonix-ecommerce.appspot.com",
  messagingSenderId: "388077728196",
  appId: "1:388077728196:web:5953456b81ce14f8e37491",
  measurementId: "G-8PEBJF60LJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore initialize
const db = getFirestore(app);

export default db;