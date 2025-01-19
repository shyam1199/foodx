import { useSelector } from "react-redux"
import { getMenuList, getRestaurantList } from "../backend/services/restaurant"
import { useEffect } from "react";

const useCartDetails = async (setDetails) => {
    const cart = useSelector((state) => state.cart)

    useEffect(() => async () => {
        if (!cart.resId) return;
        const restaurantList = await getRestaurantList()
        const restaurnatMenu = await getMenuList(cart.resId)
        const resDetails = restaurantList.find((resData) => resData.id == cart.resId)
        const itemDetails = restaurnatMenu.flatMap(
            (category) => {
                return category.items.filter((item) => Object.keys(cart.itemIdsMap).includes(String(item.id)))
            }
        )
        itemDetails.map((item) => { item.quantity = cart.itemIdsMap[item.id] })
        setDetails({ resDetails, itemDetails })
    }, [cart]
    )

}
export default useCartDetails