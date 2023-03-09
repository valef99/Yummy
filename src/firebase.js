import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

/* firebase*/
const firebaseConfig = {
    apiKey: "AIzaSyBlWvMojZJIpwEHVNpf7X27rJP-pkuKQYU",
    authDomain: "yummyproject-fe6c0.firebaseapp.com",
    projectId: "yummyproject-fe6c0",
    storageBucket: "yummyproject-fe6c0.appspot.com",
    messagingSenderId: "494491876507",
    appId: "1:494491876507:web:e155a84be110343637da3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider= new GoogleAuthProvider();
export const signInWithGoogle = () => {
    signInWithPopup(auth,provider).then((result) => {
        console.log(result);
        const email= result.user.email;
        const name= email.substring(0,email.indexOf("@"));
        const profilePic= result.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
    }).catch((error) =>{
        console.log(error);
    });
}
export const firestore = getFirestore(app);
