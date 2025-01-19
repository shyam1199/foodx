import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: JSON.parse(localStorage.getItem("userData") || "{}"),
    reducers: {
        login: (state, { payload }) => {
            localStorage.setItem("userData", JSON.stringify(payload))
            return payload
        },
        logout: (state) => {
            localStorage.removeItem("userData")
            return {}
        }
    }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer