import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCXxPo2CeHuVWc505zTyBjRvixDYRlT4b0",
    authDomain: "ecomm-db-17389.firebaseapp.com",
    projectId: "ecomm-db-17389",
    storageBucket: "ecomm-db-17389.appspot.com",
    messagingSenderId: "945623413013",
    appId: "1:945623413013:web:7d0e74106de73c747d391c"
  };

  export const createUserProfileDocument = async (userAuth, additionalData ) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    console.log(snapShot)

    if (!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData  
        }) 
        }catch(error){
            console.log('error creating user', error.message)
        }
          }

          return userRef;
  }

    

  

  
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;