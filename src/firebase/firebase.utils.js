import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyCJrA_SdJzFvIj7_7VHfJHUGTahTcD5Qsg",
    authDomain: "ecommerce-cee85.firebaseapp.com",
    databaseURL: "https://ecommerce-cee85.firebaseio.com",
    projectId: "ecommerce-cee85",
    storageBucket: "ecommerce-cee85.appspot.com",
    messagingSenderId: "706160363219",
    appId: "1:706160363219:web:dbc20874bb64223ebbb626",
    measurementId: "G-RTB43HZEM5"
  };

  firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore =firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({
    'prompt': 'select_account'
  });

  export  const SignInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;