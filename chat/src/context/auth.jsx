/* eslint-disable react-refresh/only-export-components */
import { onAuthStateChanged, signOut as authSignOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import { useContext } from "react";

const AuthUserContext = createContext({
    authUser: null,
    loading: true,
});

const useFirebaseAuth =() =>{
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const clear = () =>{
        setAuthUser(null);
        setLoading(false)
    }

    const authStateChanged = async (user) =>{
        setLoading(true);
        if(!user){
            clear();
            return;
        }
        setAuthUser({
            uid: user.uid,
            email: user.email
        });
        setLoading(false)
    };

    const signOut = () => authSignOut(auth).then(()=>{
        clear()
    })

    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, authStateChanged);
        return () => unsubscribe();
    }, []);

    return{
        authUser,
        loading,
        signOut
    }
}

// eslint-disable-next-line react/prop-types
export const AuthUserProvider = ({ children }) =>{
    const auth = useFirebaseAuth();
    return <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
}

export const useAuth = () => useContext(AuthUserContext)

export default useFirebaseAuth;