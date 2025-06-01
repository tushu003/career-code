import React, { useEffect, useState } from 'react';
import { AuthContext } from './authContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [loading, setLoading]= useState(true);
    const [user, setUser] = useState(null);

    const createUser=(email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser=(email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
            setLoading(false);
        })
        return () => {
            setLoading(false);
        }
    })

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        logOut
    }
    return (
        <AuthContext value={authInfo}>
             {children}
        </AuthContext>
    );
};

export default AuthProvider;