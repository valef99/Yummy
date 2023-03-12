import React, {useEffect, useRef, useState} from "react";
import {firestore} from "../../firebase";
import {addDoc, collection, doc, getDocs, setDoc} from "@firebase/firestore";
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import {auth, signInWithGoogle} from "../../firebase";
import CheckboxRecipe from "../../components/CheckboxRecipe/CheckboxRecipe";
import style from "../Profile/Profile.module.css";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Email from "../../assets/images/email.png";
import Password from "../../assets/images/password.png";


function Profile() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});
    const [favourite, setFavourite] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

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
            await createUserWithEmailAndPassword(auth, registerEmail, registerPassword).then(
                () => {
                    localStorage.setItem("name", registerEmail.substring(0,registerEmail.indexOf("@")));
                    localStorage.setItem("email", registerEmail);
                    localStorage.setItem("profilePic", "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png");
                }
            )
        }catch (e) {
            console.log(e);
        }
    }
    const login = async () => {
        try{
            await signInWithEmailAndPassword(auth, loginEmail, loginPassword).then(
                () => {
                    localStorage.setItem("name", loginEmail.substring(0,loginEmail.indexOf("@")));
                    localStorage.setItem("email", loginEmail);
                    localStorage.setItem("profilePic", "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png");
                }
            )
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
                <h2>Welcome back!</h2>
                <h5>We missed you</h5>
                <div className="w-50 mt-4">
                    <form className="d-flex flex-column" onSubmit={submitHandler}>
                        <div className="d-flex flex-row align-items-center pb-4">
                            <img src={Email} className={style.authIcon} alt="email icon"/>
                            <input className="w-100" placeholder="email" onChange={(event) => {setLoginEmail(event.target.value)}} required/>
                        </div>
                        <div className="d-flex flex-row align-items-start">
                            <img src={Password} className={style.authIcon} alt="password icon"/>
                            <div className="d-flex flex-column w-100 mb-3">
                                <input placeholder="password" type="password" minLength="6" onChange={(event) => {setLoginPassword(event.target.value)}} required/>
                                <p className="small pt-2">* At least 6 characters</p>
                            </div>
                        </div>
                        <button className="mt-3 mb-2 btn buttons w-100" onClick={login}>Login</button>
                        <p className={`my-4 ${style.orContainer}`}>
                            <span>
                                OR
                            </span>
                        </p>
                        <div className="d-flex justify-content-center mt-2 mb-4">
                            <button className={style.loginGoogle} onClick={signInWithGoogle}>Google</button>
                        </div>

                    </form>

                </div>
            </div>
            <div>
                <div className="d-flex flex-row align-items-center">
                    <p>Don't you have an account?</p>
                    <Button onClick={toggle} className={style.signup}>
                        Sign up
                    </Button>
                </div>

                <Collapse isOpen={isOpen}>
                        <h3>Register user</h3>
                        <form className="d-flex flex-column" onSubmit={submitHandler}>
                            <label className="mt-2">Email</label>
                            <input className="col-3" placeholder="email" onChange={(event) => {setRegisterEmail(event.target.value)}} required/>
                            <label className="mt-2">Password</label>
                            <input className="col-3" placeholder="password" type="password" minLength="6" onChange={(event) => {setRegisterPassword(event.target.value)}} required/>
                            <button className="col-3 mt-3 btn buttons" type="submit" onClick={register}>Create user</button>
                        </form>
                </Collapse>


            </div>

            {user && user.uid &&
                <div>
                    <h4>User logged in:</h4>
                    <h5>{localStorage.getItem("name")}</h5>
                    <h5>{localStorage.getItem("email")}</h5>
                    <img src={localStorage.getItem("profilePic")}/>
                    <button className="col-3 mt-3 btn buttons" onClick={logout}>Sign out</button>
                    <CheckboxRecipe user={user} favourite={1}/>
                    <CheckboxRecipe user={user} favourite={2}/>
                    <CheckboxRecipe user={user} favourite={3}/>
                </div>
            }

        </div>
    )
}
export default Profile;