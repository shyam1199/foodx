import { useSelector } from "react-redux"
import restaurantList from "../data/restaurantList.json"
import restaurnatMenu from "../data/restaurnatMenu.json"

const useCartDetails = () => {
    const cart = useSelector((state) => state.cart)
    if (!cart.resId) null;
    const resDetails = restaurantList.find((resData) => resData.id == cart.resId)
    const itemDetails = restaurnatMenu.flatMap(
        (category) => {
            return category.items.filter((item) => Object.keys(cart.itemIdsMap).includes(String(item.id)))
        }
    )
    itemDetails.map((item) => { item.quantity = cart.itemIdsMap[item.id] })
    return { resDetails, itemDetails }
}
export default useCartDetails