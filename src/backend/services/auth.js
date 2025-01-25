import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from '../firebase'

const createUserAccount = async (email, password) => {
    try {
        if (typeof email != "string" || typeof password != "string")
            throw new Error("Inavlid Creds")
        if (email.length <= 6 || password.length <= 6)
            throw new Error("Min 6 char Required in Email and Password")

        await createUserWithEmailAndPassword(auth, email, password);
        return { error: null }
    } catch (err) {
        return { error: err.message || "Something Went Wrong!!" }
    }
}

const userLogin = async (email, password) => {
    try {
        if (typeof email != "string" || typeof password != "string")
            throw new Error("Inavlid Creds")
        if (email.length <= 6 || password.length <= 6)
            throw new Error("Min 6 char Required in Email and Password")
        await signInWithEmailAndPassword(auth, email, password);
        return { error: null }
    } catch (err) {
        return { error: err.message || "Something Went Wrong!!" }
    }
}

const userLogout = async () => {
    try {
        await signOut(auth);
        return { error: null }
    } catch (err) {
        return { error: err.message || "Something Went Wrong!!" }
    }
}

export { createUserAccount, userLogin, userLogout }