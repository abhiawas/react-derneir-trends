import firebase from 'firebase/app' ;
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyBlHOqc6oZ-OcDgpTIkqRozxu-p44xdzzQ",
    authDomain: "crown-clothing-db-53833.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-53833.firebaseio.com",
    projectId: "crown-clothing-db-53833",
    storageBucket: "crown-clothing-db-53833.appspot.com",
    messagingSenderId: "635456806437",
    appId: "1:635456806437:web:6e6d5217cc88beb32269cc",
    measurementId: "G-CL2YC256J0"
  }

firebase.initializeApp(config);

 

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    'prompt': 'select_account'
  });

export const signInWithGoogle = () =>  auth.signInWithPopup(provider);
export default firebase;
