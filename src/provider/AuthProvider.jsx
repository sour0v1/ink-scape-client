
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase.config';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [theme, setTheme] = useState(true);
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    // get current sign in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('signed in user - ', currentUser)
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])
    // handle theme
    const handleTheme = () => {
        // const getRoot = document.getElementById('home');
        // getRoot.className = 'bg-black';
        // console.log(getRoot);
        setTheme(!theme);
        // console.log(theme)
    }
    const userInfo = {
        user, loading, handleTheme, theme
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;