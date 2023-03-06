import React, {useEffect, useRef, useState} from "react";
import {addDoc, collection, query, where, getDocs, FieldValue} from "@firebase/firestore";
import {arrayUnion, arrayRemove, updateDoc, doc } from "firebase/firestore";
import {firestore} from "../../firebase";

function Checkbox(props){
    const {user, favourite} = props;
    const ref= collection(firestore,"users");

    /*TODO: Controllare se già presente allora checkbox già checked -> query non va*/
    let valueCheck;
    if(user.uid){
        let q = query(ref, where("uid", "==", user.uid.toString()), where("favourites","array-contains", favourite.toString()));
        getDocs(q).then((querySnapshot) => {
            if(querySnapshot.empty)
                valueCheck= false;
            else
                querySnapshot.forEach((doc) => {
                    valueCheck=true;
                })

            console.log(querySnapshot.empty)
        }).catch((error) => {
            console.log(error)
        })
    }
    const [checked, setChecked] = useState(valueCheck);


    const handleCheck = event => {
        if(user && user.uid){
            if (event.target.checked || !checked) {
                console.log('✅ Checkbox is checked');
                setChecked(true);

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

            } else if(!event.target.checked || checked) {
                console.log('⛔️ Checkbox is NOT checked');
                setChecked(false);
                let q = query(ref, where("uid", "==", user.uid.toString()));
                getDocs(q).then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        removeFav(doc.id);
                    })
                }).catch((error) => {
                    console.log(error)
                })
            }
            setChecked(current => !current);
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


    return (
        <input type="checkbox" onChange={handleCheck} defaultChecked={checked}/>
    )
}
export default Checkbox;