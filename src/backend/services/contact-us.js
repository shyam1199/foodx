import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const sendDetails = async (details) => {
    try {
        const ContactUsCollection = collection(db, "ContactUs");
        await addDoc(ContactUsCollection, {
            ...details,
            createdAt: new Date()
        });
        return { error: null }
    } catch (e) {
        return { error: err.message || "Something Went Wrong!!" }
    }
};

export { sendDetails }