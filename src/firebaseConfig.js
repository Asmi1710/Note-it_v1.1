// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import firebase from 'firebase';
//import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXp4pIvRc-JheLq3eiUQQHjGjxg8pSOfQ",
  authDomain: "note-it-6e0dd.firebaseapp.com",
  projectId: "note-it-6e0dd",
  storageBucket: "note-it-6e0dd.appspot.com",
  messagingSenderId: "989154564432",
  appId: "1:989154564432:web:b2ed8fdb7e1801c5b97455",
  measurementId: "G-0BFFE0BT33"
};
 

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
export default getFirestore();