import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDhfuFwoikbcjDRX2XIWj43esXzFOhEV-k",
    authDomain: "kiran-s-site.firebaseapp.com",
    projectId: "kiran-s-site",
    storageBucket: "kiran-s-site.appspot.com",
    messagingSenderId: "288866870107",
    appId: "1:288866870107:web:e7337225400667d232f07e"
  };

//   init firebase
firebase.initializeApp(firebaseConfig)

// init service 
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()
// timestamp
const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, projectStorage, timestamp}