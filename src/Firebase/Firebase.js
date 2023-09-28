import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyBEbk31rUs8TaHoeBRHNK6FjV_rzyEYE-M",
  authDomain: "chatify-fcb75.firebaseapp.com",
  projectId: "chatify-fcb75",
  storageBucket: "chatify-fcb75.appspot.com",
  messagingSenderId: "783149203391",
  appId: "1:783149203391:web:74bdd3b0e5015e72866b0a",
  measurementId: "G-J5CM2YD02T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };
