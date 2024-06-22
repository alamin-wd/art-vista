import { getAuth } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext } from 'react';
import app from '../firebase/firebase.config';


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {


    const authInfo = {

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