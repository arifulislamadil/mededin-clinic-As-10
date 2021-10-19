import initializeAuthenticatin from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthenticatin();

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => setUser(result.user))
            .catch((error) => setError(error.message));
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setError("")
            }
        });
    }, []);


    const handleLogout = () => {
        signOut(auth).then(() => {
            setUser({});

        }).catch((error) => {
            setError("");
        });

    }

    const handleRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password Must be at least six digits long")
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
            })
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }




    return { loginWithGoogle, user, error, handleLogout, handleRegistration, handleEmail, handlePassword }

}
export default useFirebase;