import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {UserProfile} from "../../utils/types";
import {fetchUser, registerUser, updateUser} from "../api/accountApi.ts";

const initialState = {} as UserProfile;

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (_state, action: PayloadAction<UserProfile>) => action.payload,
        clearUser: () => initialState,
        changeFirstName: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload;
        },
        changeLastName: (state, action: PayloadAction<string>) => {
            state.lastName = action.payload;
        },
    },
        extraReducers: builder => {
            builder
                .addCase(registerUser.fulfilled, (_state, action) => action.payload.user)
                .addCase(fetchUser.fulfilled, (_state, action) => action.payload.user)
                .addCase(updateUser.fulfilled, (state, action) => {
                    state.firstName = action.payload.firstName;
                    state.lastName = action.payload.lastName;
                })
        }
})

export default userSlice.reducer;
export const {setUser, changeLastName, changeFirstName, clearUser} = userSlice.actions;

