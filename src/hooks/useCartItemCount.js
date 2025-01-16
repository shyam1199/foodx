import { useSelector } from "react-redux"

const useCartItemCount = () => {
    const itemIdsMap = useSelector((state) => state.cart.itemIdsMap);
    let count = 0;
    Object.keys(itemIdsMap).forEach((itemid) => { count += itemIdsMap[itemid] })
    return count;
}
export default useCartItemCount