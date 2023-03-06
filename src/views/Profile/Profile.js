import React, {useEffect, useRef, useState} from "react";
import {firestore} from "../../firebase";
import {addDoc, collection, doc, getDocs, setDoc} from "@firebase/firestore";
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import {auth, signInWithGoogle} from "../../firebase";
import Checkbox from "../../components/Checkbox/Checkbox";

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
        <div>
            <div>
                <h3>Register user</h3>
                <input placeholder="email" onChange={(event) => setRegisterEmail(event.target.value)}/>
                <input placeholder="password" onChange={(event) => setRegisterPassword(event.target.value)}/>
                <p>Almeno 6 caratteri PW</p>
                <button onClick={register}>Create user</button>
            </div>
            <div>
                <h3>Login user</h3>
                <input placeholder="email" onChange={(event) => setLoginEmail(event.target.value)}/>
                <input placeholder="password" onChange={(event) => setLoginPassword(event.target.value)}/>
                <button onClick={login}>Login</button>
            </div>
            <h4>User logged in</h4>
            {user?.email}
            <button onClick={logout}>Sign out</button>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            <h1>{localStorage.getItem("name")}</h1>
            <h1>{localStorage.getItem("email")}</h1>
            <img src={localStorage.getItem("profilePic")}/>
            <br/>
            <Checkbox user={user} favourite={1}/>
            <Checkbox user={user} favourite={2}/>
            <Checkbox user={user} favourite={3}/>
        </div>
    )
}
export default Profile;