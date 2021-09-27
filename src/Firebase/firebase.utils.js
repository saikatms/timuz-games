import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const Config = {
  apiKey: "AIzaSyAVjeAg2bVaQDZ4_W7-7WlLY-60cmu6Nmc",
  authDomain: "timuz-games.firebaseapp.com",
  databaseURL: "https://timuz-games-default-rtdb.firebaseio.com",
  projectId: "timuz-games",
  storageBucket: "timuz-games.appspot.com",
  messagingSenderId: "1015887746572",
  appId: "1:1015887746572:web:c0711fa40936b5d80bc029",
  measurementId: "G-MZT49EJNWH",
};

export const CreateUserProfileDocument = async (userAuth, additionalData) => {
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
        ...additionalData,
      });
    } catch (error) {
      console.log(`${error} User Can't be registered`);
    }
  }
  return userRef;
};

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
