import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { Firestore } from 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCiNnS2jvRRPcRX3-f_PzMzusYgoPcrRZA",
  authDomain: "luxury-line.firebaseapp.com",
  projectId: "luxury-line",
  storageBucket: "luxury-line.appspot.com",
  messagingSenderId: "726612830676",
  appId: "1:726612830676:web:c515c76684397600da4e41",
  measurementId: "G-LX89FFWP3R"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;