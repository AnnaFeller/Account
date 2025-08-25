import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {UserProfile} from "../../utils/types";

const initialState = {} as UserProfile;

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (_state, action: PayloadAction<UserProfile>) => action.payload,
        clearUser: ()=> initialState,
        changeFirstName:(state, action: PayloadAction<string>) => {
            state.firstName = action.payload;
        },
        changeLastName:(state, action: PayloadAction<string>) => {
            state.lastName = action.payload;
        }
    }
})

export default userSlice.reducer;
export const {setUser, changeLastName, changeFirstName, clearUser} = userSlice.actions;

