import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // user register by email & password
    const createdByEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user signIn by email & password
    const signInByEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user signIn by google
    const createdByGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    }

    // user signIn by github
    const createdByGithub = (provider) => {
        return signInWithPopup(auth, provider)
    }

    // currently signed-in user observer

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            console.log('logged user', loggedUser);
            setUser(loggedUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    // signOut

    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        user,
        logOut,
        createdByEmailPass,
        createdByGoogle,
        createdByGithub,
        signInByEmailPass
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;