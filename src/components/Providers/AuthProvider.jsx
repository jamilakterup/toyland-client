import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from "../../firebase/firebase.config";
import {createContext} from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

const googleSIgnIn = () => {
    return signInWithPopup(auth, googleProvider);
};

const logOutUser = () => {
    return signOut(auth);
};

const authInfo = {
    signUpUser,
    signInUser,
    googleSIgnIn,
    logOutUser,
};

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;