import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from './../Firebase/firebase.config';




export  const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

  const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

const signIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

  const logout = () => {
    setLoading(true)
    return signOut(auth);
  }

  

  const authinfo = {
    user,
    loading,
    createUser,
    signIn,
    logout,
  }
  
  useEffect( ()=>{
   const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
        console.log('user in the auth sate Change', currentUser);
        setLoading(false)
        setUser(currentUser);
    });
    return() => {
        unSubscribe();
    }
  }, [])
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;