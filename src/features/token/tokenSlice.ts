import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {changePassword, fetchUser, registerUser} from "../api/accountApi.ts";

const initialState = '';

const tokenSlice = createSlice({
    name: "token",
    initialState: '',
    reducers: {
        setToken: (_state, action: PayloadAction<string>) => action.payload,
        clearToken: () => initialState,
    },
    extraReducers: builder => {
        builder.addCase(registerUser.fulfilled, (_state, action) => action.payload.token)
        builder.addCase(fetchUser.fulfilled, (_state, action) => action.payload.token)
        builder.addCase(changePassword.fulfilled, (_state, action) => action.payload)
    },
})
export default tokenSlice.reducer;
export const {setToken, clearToken} = tokenSlice.actions;