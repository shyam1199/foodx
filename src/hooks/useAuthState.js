import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from "../backend/firebase";
import { onAuthStateChanged } from 'firebase/auth';
import { login, logout } from '../reducers/userSlice';

const UseAuthState = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(login({ uid: user.uid, email: user.email, name: user.displayName || "User" }));
            } else {
                dispatch(logout());
            }
        });

        return () => unsubscribe();
    }, [auth, dispatch]);
}

export default UseAuthState;

