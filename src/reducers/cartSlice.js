import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: { resId: null, itemIds: [] },
    reducers: {
        addToCart: (state, { payload }) => {
            if (state.resId != payload.resId) {
                state.resId = payload.resId
                state.itemIds = []
            }
            state.itemIds.push(payload.itemId)
        },
        removeFromCart: (state, { payload }) => {
            state.itemIds = state.itemIds.filter((value) => value != payload.itemId)
            if (!state.itemIds.length) state.resId = null
        }
    }
})
export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer