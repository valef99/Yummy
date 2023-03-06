import React, {useEffect, useRef, useState} from "react";
import {firestore} from "../../firebase";
import {addDoc, collection, doc, getDocs, setDoc} from "@firebase/firestore";
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import {auth, signInWithGoogle} from "../../firebase";
import Checkbox from "../../components/Checkbox/Checkbox";
import style from "../Profile/Profile.module.css";

function Profile() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});
    const [favourite, setFavourite] = useState([]);

    function clearFields(event) {
        Array.from(event.target).forEach((e) => (e.value = ""));
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        getUsers();
    }, [])

    useEffect(()=> {
        console.log(favourite);
    }, [favourite])

    const register = async () => {
        try{
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user);
        }catch (e) {
            console.log(e);
        }
    }
    const login = async () => {
        try{
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user);
        }catch (e) {
            console.log(e);
        }
    }
    const logout = async () => {
        await signOut(auth);
    }
    function submitHandler(event){
        event.preventDefault();
        clearFields(event);
    }

    const ref= collection(firestore,"users");

    function getUsers(){
        getDocs(ref).then((response)=> {
            const usersList = response.docs.map((doc) => ({data: doc.data(), id: doc.id}))
            setFavourite(usersList);
        }).catch((error) => {console.log(error)})
    }

    return(
        <div className="container">
            <div>
                <h3>Login user</h3>
                <form className="d-flex flex-column" onSubmit={submitHandler}>
                    <label className="mt-2">Email</label>
                    <input className="col-3" placeholder="email" onChange={(event) => {setLoginEmail(event.target.value)}} required/>
                    <label className="mt-2">Password</label>
                    <input className="col-3" placeholder="password" type="password" minLength="6" onChange={(event) => {setLoginPassword(event.target.value)}} required/>
                    <button className="col-3 mt-3 btn buttons" onClick={login}>Login</button>
                </form>
                <p>OR</p>
                <button className={style.loginGoogle} onClick={signInWithGoogle}>Sign in with Google</button>
                <p>Don't you have an account? <strong>Sign up</strong></p>
            </div>
            <div>
                <h3>Register user</h3>
                <form className="d-flex flex-column" onSubmit={submitHandler}>
                    <label>Name</label>
                    <input className="col-3" placeholder="Your name" type="text" required/>
                    <label className="mt-2">Surname</label>
                    <input className="col-3" placeholder="Your surname" type="text" required/>
                    <label className="mt-2">Email</label>
                    <input className="col-3" placeholder="email" onChange={(event) => {setRegisterEmail(event.target.value)}} required/>
                    <label className="mt-2">Password</label>
                    <input className="col-3" placeholder="password" type="password" minLength="6" onChange={(event) => {setRegisterPassword(event.target.value)}} required/>
                    <button className="col-3 mt-3 btn buttons" type="submit" onClick={register}>Create user</button>
                </form>

            </div>
            <h4>User logged in</h4>
            {user?.email}

            {user &&
                <div>
                    <h1>{localStorage.getItem("name")}</h1>
                    <h1>{localStorage.getItem("email")}</h1>
                    <img src={localStorage.getItem("profilePic")}/>
                    <button className="col-3 mt-3 btn buttons" onClick={logout}>Sign out</button>
                    <Checkbox user={user} favourite={1}/>
                    <Checkbox user={user} favourite={2}/>
                    <Checkbox user={user} favourite={3}/>
                </div>
            }

        </div>
    )
}
export default Profile;