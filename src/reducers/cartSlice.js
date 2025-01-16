import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: { resId: null, itemIdsMap: {} },
    reducers: {
        addToCart: (state, { payload }) => {
            if (state.resId != payload.resId) {
                state.resId = payload.resId
                state.itemIdsMap = {}
            }
            if (state.itemIdsMap[payload.itemId]) {
                state.itemIdsMap[payload.itemId]++;
            } else {
                state.itemIdsMap[payload.itemId] = 1;
            }
        },
        removeFromCart: (state, { payload: itemId }) => {
            if (state.itemIdsMap[itemId] <= 1) delete state.itemIdsMap[itemId];
            else state.itemIdsMap[itemId]--;
            if (!Object.keys(state.itemIdsMap).length) state.resId = null;
        },
        clearCart: (state) => {
            state.resId = null;
            state.itemIdsMap = {}
        },
    }
})
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer