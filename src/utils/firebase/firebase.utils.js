import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBKNEr6ZPI24Em18N0SjSw7K9Td2UG8qxM",
    authDomain: "crwn-clothing5-db.firebaseapp.com",
    projectId: "crwn-clothing5-db",
    storageBucket: "crwn-clothing5-db.appspot.com",
    messagingSenderId: "196963598245",
    appId: "1:196963598245:web:36771c0ce5d581fab9f24c"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);