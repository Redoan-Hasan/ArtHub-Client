/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
// console.log(user);
    // create user 
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // update user 
    const updatePhoto = (name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name, photoURL: photo
        })
    }

    // log in 
    const login = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    // log out 
    const logOut = ()=>{
        return signOut(auth)
    }
    // observer 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        })
        return ()=>{unSubscribe()}
    },[])
    const authInfo = {user,createUser,updatePhoto,login,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;