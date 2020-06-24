import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import 'firebase/auth'
import 'firebase/firestore'

// Initialize Firebase

const settings = {timestampsInSnapshots: true};
const firebaseConfig = {
  apiKey: "AIzaSyDJSOzGBL4SrUE-NP5SU3D7pXOHSTSh6_E",
  authDomain: "reactpfa.firebaseapp.com",
  databaseURL: "https://reactpfa.firebaseio.com",
  projectId: "reactpfa",
  storageBucket: "reactpfa.appspot.com",
  messagingSenderId: "34214302898",
  appId: "1:34214302898:web:dcd33a1a52d35c194de5ab",
  measurementId: "G-C80WQ9KP29"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings(settings);
  const db=firebase.firestore();

export default firebase;

  export const firebaseAuth = firebaseApp.auth();
