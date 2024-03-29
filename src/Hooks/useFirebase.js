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

        return signInWithPopup(auth, googleProvider)



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
            setError("Password Shuould be at least six characters")
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




    return { loginWithGoogle, setError, setUser, user, error, handleLogout, handleRegistration, handleEmail, handlePassword }

}
export default useFirebase;