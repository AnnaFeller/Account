import {createAsyncThunk} from "@reduxjs/toolkit";
import type {UserData, userRegister} from "../../utils/types";
import {base_url, base_user, createToken} from "../../utils/constatnts.ts";
import type {RootState} from "../../app/store.ts";

export const registerUser = createAsyncThunk(
    'user/register',
    async (user: userRegister) => {
        const response = await fetch(`${base_url}/account/register `, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
        if (response.status === 409) {
            throw new Error(`UUser ${user.login} already exists`);
        }
        if (!response.ok) {
            throw new Error(`Something went wrong`);
        }
        const data = await response.json();
        const token = createToken(user.login, user.password);
        return {user: data, token};
    }
)

export const fetchUser = createAsyncThunk(
    'user/fetch',
    async (token: string) => {
        const response = await fetch(`${base_user}/account/login`, {
            method: "POST",
            headers: {
                "Authorization": token,
            },

        })
        if (response.status === 401) {
            throw new Error(`User already Unauthorized`);
        }
        if (!response.ok) {
            throw new Error(`Something went wrong`);
        }
        const data = await response.json();
        return {user: data, token};
    }
)

export const updateUser = createAsyncThunk<UserData, UserData, { state: RootState }>(
    'user/update',
    async (user, {getState}) => {
        const response = await fetch(`${base_url}/account/user/${getState().user.login}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: getState().token,
            },
            body: JSON.stringify(user)
        })
        if (response.status === 401) {
            throw new Error(`User already Unauthorized`);
        }
        if (!response.ok) {
            throw new Error(`Something went wrong`);
        }
        const {firstName, lastName}= await response.json()
        return {firstName, lastName};
    }
)
export const changePassword = createAsyncThunk<string, string, { state: RootState }>(
    'user/password',
    async (newPassword, {getState}) => {
        const response = await fetch(`${base_url}/account/password`, {
            method: "PATCH",
            headers: {
                Authorization: getState().token,
                'X-password': newPassword,
            }
        })
        if (response.status === 401) {
            throw new Error(`User already Unauthorized`);
        }
        if (!response.ok) {
            throw new Error(`Something went wrong`);
        }
        return createToken(getState().user.login, newPassword);
    }
)