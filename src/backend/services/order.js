import { db, auth } from "../firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

const addOrder = async (resDetails, itemDetails) => {
    try {
        const ordersCollection = collection(db, "Orders");
        await addDoc(ordersCollection, {
            userId: auth.currentUser?.uid,
            resDetails,
            itemDetails,
            placedAt: String(Date.now())
        });
        return { error: null }
    } catch (e) {
        return { error: err.message || "Something Went Wrong!!" }
    }
};

const fetchUserOrders = async () => {
    try {
        if (!auth.currentUser?.uid) return [];
        const ordersCollection = collection(db, "Orders");

        const q = query(ordersCollection, where("userId", "==", auth.currentUser?.uid));

        const querySnapshot = await getDocs(q);

        const orders = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return orders;
    } catch (err) {
        return { error: err.message || "Something Went Wrong!!" }
    }
};

export { addOrder, fetchUserOrders }