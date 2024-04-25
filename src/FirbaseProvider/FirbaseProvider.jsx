import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";



export const AuthContext = createContext(null)

// social auth provider
const googleProvider = new GoogleAuthProvider() 
const githubProvider = new GithubAuthProvider();

const FirbaseProvider = ({children}) => {
    const [user, setUser] = useState(null)

    console.log(user)
    const [loading , setLoading] = useState(true);
    console.log(loading)

    // create user 
    const createUser = (email, password) =>{
        setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user profile
    const updateUserProfile = (name, image) => {
     return updateProfile(auth.currentUser, {
            displayName: name,
             photoURL: image
          })
    }


     // login in user
 const loginUser = (email, password) =>{
    setLoading(true)
    return  signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // github login
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () =>{
        setUser(null)
        signOut(auth);
    }


     // observer 
     useEffect(()=>{
     const unsubscribe =  onAuthStateChanged(auth, (user) =>{
            if(user) {
                setUser(user)
                 setLoading(false);
            }
        })
        return () => unsubscribe()
    },[])


    const authInfo = { 
        user,
        loading, 
        setUser,
        createUser,
        loginUser,
        googleLogin,
        githubLogin,
        logOut,
        updateUserProfile,
       
    }
   
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default FirbaseProvider;