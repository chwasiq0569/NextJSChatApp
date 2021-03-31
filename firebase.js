import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCz0uZpDZRzQn8PKglDXjIrfaoEUZ_Vg1s",
  authDomain: "chatapp-a451a.firebaseapp.com",
  projectId: "chatapp-a451a",
  storageBucket: "chatapp-a451a.appspot.com",
  messagingSenderId: "256490364020",
  appId: "1:256490364020:web:25e63c57b152fbd218c521"
};
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider, db }


