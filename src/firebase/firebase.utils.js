import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCzoABf278phFf_WjprypOXNuqyqb0ceg0",
    authDomain: "vain-clothing-db.firebaseapp.com",
    projectId: "vain-clothing-db",
    storageBucket: "vain-clothing-db.appspot.com",
    messagingSenderId: "807037156529",
    appId: "1:807037156529:web:9823edb615d04db4bdb690"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ 
      prompt: 'select_account'
  });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;