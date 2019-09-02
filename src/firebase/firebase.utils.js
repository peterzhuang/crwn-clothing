import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAVX7s6riJXVFjGBxE2pin40DO0nuTwGSQ",
    authDomain: "crwn-shop.firebaseapp.com",
    databaseURL: "https://crwn-shop.firebaseio.com",
    projectId: "crwn-shop",
    storageBucket: "",
    messagingSenderId: "878521623191",
    appId: "1:878521623191:web:04d3f6abdeecf77d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;




