import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthenticatin = () => {
    initializeApp(firebaseConfig)
}

export default initializeAuthenticatin;