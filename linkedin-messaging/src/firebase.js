import firebase from 'firebase';

const firebaseConfig = {
      apiKey: "AIzaSyAsgKB1ULbu4uNPj7ADRm-PGgT9SZQdsPc",
      authDomain: "linkedin-messaging-eedeb.firebaseapp.com",
      projectId: "linkedin-messaging-eedeb",
      storageBucket: "linkedin-messaging-eedeb.appspot.com",
      messagingSenderId: "814103232588",
      appId: "1:814103232588:web:2aef63b14cd7f5c3a974e9"
    };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore(); 
const auth = firebase.auth(); // access to authentication


export { db, auth }