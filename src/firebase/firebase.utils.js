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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`)

      const documentSnapshot = await userRef.get();

      if (!documentSnapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(error) {
            console.log('error creating user', error.message)
        }
      }

      return userRef;
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ 
      prompt: 'select_account'
  });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;