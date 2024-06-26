import { auth, googleAuthProvider } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";

async function login() {
    signInWithPopup(auth, googleAuthProvider)
        .then((result) => {
            return result.user;
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert("😓 Not able to login. Please try again later! 😓");
            throw Error(errorMessage);
        });
}

export { login }