
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


// import { createContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
// import app from '../firebase/firebase.config';

// const auth = getAuth(app);

// export const AuthContext = createContext(null);

// // const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const createUser = (email, password, name, photoURL) => {
//         setLoading(true);

//         return createUserWithEmailAndPassword(auth, email, password)
//             .then(result => {
//                 // Optionally update user profile here (name, photoURL, etc.)
//                 // return updateProfile(result.user, { displayName: name, photoURL });
//                 return result;
//             })
//             .finally(() => setLoading(false)); // Ensure loading state is updated
//     };

//     // const googleLogin = () => {
//     //     setLoading(true);
//     //     return signInWithPopup(auth, googleProvider)
//     //         .finally(() => setLoading(false)); // Ensure loading state is updated
//     // };

//     const signIn = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password)
//             .finally(() => setLoading(false)); // Ensure loading state is updated
//     };

//     const LogOut = () => {
//         setLoading(true);
//         return signOut(auth)
//             .finally(() => setLoading(false)); // Ensure loading state is updated
//     };

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, user => {
//             setUser(user);
//             setLoading(false); // Ensure loading state is updated on state change
//         });

//         return () => unsubscribe();
//     }, []);

//     const authInfo = {
//         user,
//         createUser,
//         signIn,
//         LogOut,
//         // googleLogin,
//         loading
//     };

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// AuthProvider.propTypes = {
//     children: PropTypes.node.isRequired
// };

// export default AuthProvider;
