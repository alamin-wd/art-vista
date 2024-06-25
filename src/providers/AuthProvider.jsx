
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const AuthContext = createContext(null);

// Social Providers
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // User Sign Up
    const createUser = (email, password) => {

        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Google Login

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // User Sign In
    const signIn = (email, password) => {

        setLoading(true);

        return signInWithEmailAndPassword(auth, email, password);
    }

    // User Sign Out
    const LogOut = () => {

        setLoading(true);

        return signOut(auth);
    }

    // Observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                setLoading(false);
            }
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        setUser,
        createUser,
        loading,
        signIn,
        LogOut,
        googleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthProvider;
