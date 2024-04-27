import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createContext, useState } from 'react';
import auth from '../firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    // create user by email and password
    const createUserByEmailAndPass = (email, pass) =>{
        createUserWithEmailAndPassword(auth, email, pass);
        return;
    }

    const userInfo = {
        user, createUserByEmailAndPass
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;