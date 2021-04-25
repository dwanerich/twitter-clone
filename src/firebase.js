import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAHhlyXybZFn_xzTkGJ6Cp8Oea7p-RWe4g",
    authDomain: "twitter-clone-e465e.firebaseapp.com",
    projectId: "twitter-clone-e465e",
    storageBucket: "twitter-clone-e465e.appspot.com",
    messagingSenderId: "834029603022",
    appId: "1:834029603022:web:6b157cbe215be38bb1e89f",
    measurementId: "G-LM4XX1SFEF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db;