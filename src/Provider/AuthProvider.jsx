import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // user register part
    const createdByEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const createdByGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const createdByGithub = (provider) => {
        return signInWithPopup(auth, provider)
    }


    // user signIn part
    const signInByEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
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