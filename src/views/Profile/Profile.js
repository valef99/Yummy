import React, {useEffect, useRef, useState} from "react";
import {firestore} from "../../firebase";
import {addDoc, collection, doc, getDocs, setDoc} from "@firebase/firestore";
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import {auth, signInWithGoogle} from "../../firebase";
import Checkbox from "../../components/Checkbox/Checkbox";
import {NavLink} from "react-router-dom";
import style from "../Profile/Profile.module.css";

function Profile() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});
    const [favourite, setFavourite] = useState([]);

    onAuthStateChanged(auth, (currentUser)=> {
        setUser(currentUser);
    })
    const register= async () => {
        try{
            const user= await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
            console.log(user);
        } catch(error) {
            console.log(error);
        }
    }
    const login= async () => {
        try{
            const user= await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
            console.log(user);
        } catch(error) {
            console.log(error);
        }
    }
    const logout= async () => {
        await signOut(auth);
    }

    const ref= collection(firestore,"users");

    function getUsers(){
        getDocs(ref).then((response)=> {
            const usersList = response.docs.map((doc) => ({data: doc.data(), id: doc.id}))
            setFavourite(usersList);
        }).catch((error) => {console.log(error)})
    }
    useEffect(()=> {
        getUsers();
    }, [])
    useEffect(()=> {
        console.log(favourite);
    }, [favourite])


    return(
        <div className="container">
            <div>
                <h2>Welcome back!</h2>
                <h3>frase carina</h3>
                <div className={`d-flex flex-column ${style.login}`}>
                    <p>E-mail</p>
                    <input placeholder="you@email.com" type="text"
                           onChange={(event) => setRegisterEmail(event.target.value)} required/>
                    <p>Password</p>
                    <input placeholder="At least 6 characters" type="password" minLength="6"
                           onChange={(event) => setRegisterPassword(event.target.value)} required/>
                    <button className="btn buttons" onClick={login}>Login</button>
                </div>
                <p>OR</p>
                <button onClick={signInWithGoogle} className={style.loginGoogle}>Sign in with Google</button>
                <p>Don't you have an account?<strong>Sign up</strong></p>
            </div>
            <div>
                <h2>Tell us something about you</h2>
                <p>Name</p>
                <input placeholder="Your name" type="text"/>
                <p>Surname</p>
                <input placeholder="Your surname" type="text"/>
                <p>E-mail</p>
                <input placeholder="your@email.com" type="text" onChange={(event) => setRegisterEmail(event.target.value)} required/>
                <p>Password</p>
                <input placeholder="At least 6 characters" type="password" minLength="6"
                       onChange={(event) => setRegisterPassword(event.target.value)} required/>
                <button onClick={register}>Register</button>
            </div>
            <h4>User logged in</h4>
            {user?.email}
            <button onClick={logout}>Sign out</button>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            <h1>{localStorage.getItem("name")}</h1>
            <h1>{localStorage.getItem("email")}</h1>
            <img src={localStorage.getItem("profilePic")}/>
            <br/>
            {/*user &&
                <div>
                    <Checkbox user={user} favourite={1}/>
                    <Checkbox user={user} favourite={2}/>
                    <Checkbox user={user} favourite={3}/>
                </div> */
           }
        </div>
    )
}
export default Profile;