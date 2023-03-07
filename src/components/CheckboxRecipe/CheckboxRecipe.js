import React, {useEffect, useRef, useState} from "react";
import {addDoc, collection, query, where, getDocs, FieldValue} from "@firebase/firestore";
import {arrayUnion, arrayRemove, updateDoc, doc } from "firebase/firestore";
import {firestore} from "../../firebase";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import {checkFav} from "../../utility/utility";

function CheckboxRecipe(props){
    const {user, favourite} = props;
    const ref= collection(firestore,"users");
    const [checked, setChecked] = useState(false);

    let valueCheck;
    console.log("INIZIO!!! "+ favourite)
    if(user.uid){
        let q = query(ref, where("uid", "==", user.uid.toString()));
        getDocs(q).then((querySnapshot) => {
                querySnapshot.forEach((docFav) => {
                    console.log("favourites: "+docFav.data().favourites.toString().split(","))
                    valueCheck = checkFav(docFav.data().favourites.toString().split(","),favourite.toString());
                    console.log(favourite + " " + valueCheck);
                    setChecked(valueCheck);
                    console.log("SET!!! "+ valueCheck)
                })
        }).catch((error) => {
            console.log(error)
        })
    }

    console.log("stato: "+checked)

    const handleCheck = event => {
        if(user && user.uid){
            setChecked(event.target.checked);
            console.log("SET2!!! "+ event.target.checked)

            if (event.target.checked) {
                console.log('✅ CheckboxRecipe is checked');

                let q = query(ref, where("uid","==",user.uid.toString()));
                getDocs(q).then((querySnapshot) => {
                    if(querySnapshot.empty){
                        addDoc(ref, {uid: user.uid, favourites: favourite}).then((response) => {
                            console.log(response);
                        }).catch((error)=> {console.log(error)})
                    }

                    else
                        querySnapshot.forEach((doc) => {
                            addFav(doc.id);

                        })}).catch((error)=> {console.log(error)})

            } else if(!event.target.checked) {
                console.log('⛔️ CheckboxRecipe is NOT checked');
                let q = query(ref, where("uid", "==", user.uid.toString()));
                getDocs(q).then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        removeFav(doc.id);
                    })
                }).catch((error) => {
                    console.log(error)
                })
            }
        }
    };

    const addFav= async (idDoc) =>{
        const refDoc = doc(firestore, "users", idDoc);
        await updateDoc(refDoc, {
            favourites: arrayUnion(favourite)
        });
    }
    const removeFav= async (idDoc) =>{
        const refDoc = doc(firestore, "users", idDoc);
        await updateDoc(refDoc, {
            favourites: arrayRemove(favourite)
        });
    }

    const label = { inputProps: { 'aria-label': 'CheckboxRecipe demo' } };

    return (
        <div>
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} onChange={handleCheck} checked={checked} />
        </div>
    )
}
export default CheckboxRecipe;