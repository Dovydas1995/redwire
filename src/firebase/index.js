  
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
}

firebase.initializeApp(config);

const DB = firebase.firestore();
const usersCollection = DB.collection('users');

export {
    firebase,
    usersCollection
}