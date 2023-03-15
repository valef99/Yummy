import React, {useEffect, useRef, useState} from "react";
import {firestore} from "../../firebase";
import {addDoc, collection, doc, getDocs, query, setDoc, where} from "@firebase/firestore";
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import {auth, signInWithGoogle} from "../../firebase";
import style from "../Profile/Profile.module.css";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Email from "../../assets/images/email.png";
import Password from "../../assets/images/password.png";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import recipeListData from "../../assets/data/food.json"
import Food from "../../assets/images/DB loader.mp4"
import {NavLink} from "react-router-dom";
import Nothing from "../../assets/images/banana.png"


function Profile() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [recipeCards, setRecipeCards] = useState(null);

    const toggle = () => setIsOpen(!isOpen);
      var filteredList = [];

    function clearFields(event) {
        Array.from(event.target).forEach((e) => (e.value = ""));
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setRecipeCards(null);
        });
    }, [])


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

    useEffect(() => {
        let uid = user?.uid;
        if(uid !== undefined){
            let q = query(ref, where("uid", "==", uid.toString()));
            getDocs(q).then((querySnapshot) => {
                querySnapshot.forEach((docFav) => {
                    let favItems = docFav.data().favourites.toString().split(",");
                    filteredList = recipeListData.filter((recipe) => favItems.some((e) => parseInt(e) === recipe.id));
                    setRecipeCards (filteredList.map((recipe) => {
                        return(
                            <div key={recipe.id} className="col mb-4">
                                <RecipeCard
                                    name={recipe.title}
                                    number={recipe.id}
                                    image={recipe.image}
                                />
                            </div>
                        );
                    }));
                    console.log(recipeCards);
                })
            }).catch((error) => {
                console.log(error)
            })
        }
    }, [user])



    return(
        <div className="container d-flex flex-row">
            {!user &&
                <div>
                    <div>
                        <h2>Welcome back!</h2>
                        <p>Your favourite recipes are waiting for you</p>
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

                        <Collapse isOpen={isOpen} className={style.containerCollapse}>
                            <h3 className="pt-5 ps-5 pe-5">Join us!</h3>
                            <h6 className="ps-5 pe-5">Create your account now</h6>
                            <form className="d-flex flex-column mt-5 ps-5 pe-5" onSubmit={submitHandler}>
                                <label className="mt-2 mb-1">Email<b className="text-danger">*</b></label>
                                <input className="col-3 w-100 p-1 rounded-2" placeholder="you@example.com" onFocus={style.activeInput} onChange={(event) => {setRegisterEmail(event.target.value)}} required/>
                                <label className="mt-3 mb-1">Password<b className="text-danger">*</b></label>
                                <input className="col-3 w-100 p-1 rounded-2" placeholder="At least 6 characters" type="password" minLength="6" onChange={(event) => {setRegisterPassword(event.target.value)}} required/>
                                <button className="col-3 mt-4 btn buttons w-100 mb-5" type="submit" onClick={register}>Sign up</button>
                            </form>
                        </Collapse>


                    </div>
                </div>
            }

            {user && user.uid &&
                <div className={`p-5 ${style.userProfile}`}>
                    <h4>Welcome back {localStorage.getItem("name")}! </h4>
                    <div className="d-flex flex-row mb-4">
                        <img src={localStorage.getItem("profilePic")} className={style.imgProfile}/>
                        <div className="ps-3">
                            <div className="d-flex flex-row align-items-center">
                                <h5 className="m-0 pe-2">Nickname: </h5>
                                <p>{localStorage.getItem("name")}</p>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                                <h5 className="m-0 pe-2">Email: </h5>
                                <p>{localStorage.getItem("email")}</p>
                            </div>
                            <button className="col-3 mt-3 btn buttons" onClick={logout}>Sign out</button>
                        </div>
                    </div>

                    <h5 className="mb-3">Your favourite recipes</h5>
                    {filteredList &&
                        <div className={`row 
                            row-cols-1
                            row-cols-sm-2
                            row-cols-md-3
                            row-cols-lg-3
                            row-cols-xl-3`}>
                            {recipeCards}
                        </div>
                    }
                    {filteredList.length === 0 &&
                    <div className="d-flex flex-column">
                        <div className="d-flex flex-row align-items-center justify-content-center">
                            <img src={Nothing} className={style.nothing}/>
                            <h4 className="ms-4 text-black">Nothing to see here</h4>
                        </div>
                        <NavLink className="btn buttons align-self-center" to="/recipes">View all recipes</NavLink>
                    </div>}
                </div>
            }
            <div className={style.containerVideo}>

            </div>
            <video autoPlay loop src={Food} type="video/mp4" className="w-50" />
        </div>
    )
}
export default Profile;