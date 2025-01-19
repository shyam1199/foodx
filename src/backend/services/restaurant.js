import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase';

const getRestaurantList = async () => {
    try {
        const restaurantCollection = collection(db, "Restaurants");

        const restaurantSnapshot = await getDocs(restaurantCollection);

        return restaurantSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error("Error fetching data from Firestore:", error);
        return [];
    }
}

const getMenuList = async (resId) => {
    try {
        const menuCollection = collection(db, "MenuItems");

        const menuQuery = query(menuCollection, where("resId", "==", resId));

        const menuSnapshot = await getDocs(menuQuery);

        const resp = menuSnapshot.docs[0].data()
        return resp.data || []
    } catch (error) {
        console.error("Error fetching menu items:", error);
        return [];
    }
}

export { getRestaurantList, getMenuList }