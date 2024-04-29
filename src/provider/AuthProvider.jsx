
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase.config';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    // get current sign in user
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('signed in user - ', currentUser)
        setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])
    const userInfo = {
        user
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;