import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyApG4pvHQbN_51nDtf4gnJiTWScfGRAtek",
    authDomain: "crwn-db-e20fc.firebaseapp.com",
    databaseURL: "https://crwn-db-e20fc.firebaseio.com",
    projectId: "crwn-db-e20fc",
    storageBucket: "crwn-db-e20fc.appspot.com",
    messagingSenderId: "328581667314",
    appId: "1:328581667314:web:2bd682039b9db33c9bb36b",
    measurementId: "G-LSQVZ4LNKE"
  };



  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
  