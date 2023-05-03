import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
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


    // user signIn part


    const authInfo = {
        user,
        createdByEmailPass,
        createdByGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;