import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

/* firebase*/
const firebaseConfig = {
    apiKey: "AIzaSyAiDeLwgr2PMSIWcDGtb9AMG6LC523eGvE",
    authDomain: "yummy-e4100.firebaseapp.com",
    projectId: "yummy-e4100",
    storageBucket: "yummy-e4100.appspot.com",
    messagingSenderId: "930697665816",
    appId: "1:930697665816:web:4aa931c21d1978f9e4d26d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider= new GoogleAuthProvider();
export const signInWithGoogle = () => {
    signInWithPopup(auth,provider).then((result) => {
        console.log(result);
        const name= result.user.displayName;
        const email= result.user.email;
        const profilePic= result.user.photoURL;
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
    }).catch((error) =>{
        console.log(error);
    });
}
export const firestore = getFirestore(app);
