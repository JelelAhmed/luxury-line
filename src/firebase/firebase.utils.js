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


export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if(!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			}) 

		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;