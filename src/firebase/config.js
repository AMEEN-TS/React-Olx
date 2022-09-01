import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA75re_NZqLyIT2qicwU0aAHBwCUFfDpo4",
    authDomain: "new-olx-92446.firebaseapp.com",
    projectId: "new-olx-92446",
    storageBucket: "new-olx-92446.appspot.com",
    messagingSenderId: "655075600841",
    appId: "1:655075600841:web:4f53ec001576301330a018",
    measurementId: "G-NDZM6HL6JD"
  };

export default  firebase.initializeApp(firebaseConfig)