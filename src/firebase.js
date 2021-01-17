import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDJRa9ecLTrLfqc7Gc5D2u07caNRYoC-pw",
  authDomain: "kjb--clone.firebaseapp.com",
  projectId: "kjb--clone",
  storageBucket: "kjb--clone.appspot.com",
  messagingSenderId: "219762197598",
  appId: "1:219762197598:web:9f0a50380e1ce9a2a820cf"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };