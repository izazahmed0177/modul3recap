import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
// import GoogleLogin from './../components/Login-Registration/GoogleLogin';


export const AuthContext=createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider=({children})=>{

    const [user,setUser]=useState(null)




// ============google provider===============
const googleProvider=new GoogleAuthProvider();
// ==========Registation ===================
const createUser=(email,password)=>{
return createUserWithEmailAndPassword(auth,email,password)
}

// ====================
// =======sign in===============
const signin=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}


// ====================
// ========logout============
const logout=()=>{
    return signOut()
}
// ================





const googleLogin=()=>{
    return signInWithPopup(auth,googleProvider);
};

useEffect(()=>{
const unscubcribe=onAuthStateChanged(auth,currentUser=>{
    if (currentUser) {
        setUser(currentUser)
        console.log(currentUser);
    } 
})

return ()=>{
    return unscubcribe;
}
},[])




const authInfo={user,googleLogin,createUser,signin,logout}

return(
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
)




};

export default AuthProvider;