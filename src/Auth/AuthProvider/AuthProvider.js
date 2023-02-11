import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../../Firebase.config/Firebase.config';


export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null)

  const [loading, setLoading] = useState(true)


  const createUser = (email, password) => {
    
     setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)

  }


  const setProfile = (profile) =>{

    return updateProfile (auth.currentUser , profile)

 }


 const login = (email, password) => {

  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)

}

 const logOutUser = () => {
  
    setLoading(true)
    return signOut(auth)
  
 }

  useEffect(() =>{

    const unsubscribe =onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        setLoading(false)

    });
    
    return () => {
      unsubscribe()
    }

  },[])

  
  const authInfo ={
    user,
    loading,
    createUser,
    setProfile,
    login,
    logOutUser
  }

  return (
    <div>
       
       <AuthContext.Provider value={authInfo}>

         {children}

       </AuthContext.Provider>

    </div>
  );
};

export default AuthProvider;