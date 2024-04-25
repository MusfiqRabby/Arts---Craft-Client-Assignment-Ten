import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";



export const AuthContext = createContext(null)

// social auth provider
const googleProvider = new GoogleAuthProvider() 
const githubProvider = new GithubAuthProvider();

const FirbaseProvider = ({children}) => {
    const [user, setUser] = useState(null)

    console.log(user)
    // const [loading , setLoading] = useState(true);


    // create user 
    const createUser = (email, password) =>{
      return createUserWithEmailAndPassword(auth, email, password)
    }

     // login in user
 const loginUser = (email, password) =>{
      return  signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () => {
       return signInWithPopup(auth, googleProvider)
    }
    // github login
    const githubLogin = () => {
       return signInWithPopup(auth, githubProvider)
    }


     // observer 
     useEffect(()=>{
        onAuthStateChanged(auth, (user) =>{
            if(user) {
                setUser(user)
                // setLoading(false);
            }
        })
    },[])


    const authInfo = { 
        user, 
        setUser,
        createUser,
        loginUser,
        googleLogin,
        githubLogin,
    }
   
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default FirbaseProvider;