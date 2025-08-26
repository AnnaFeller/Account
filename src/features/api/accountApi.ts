import {createAsyncThunk} from "@reduxjs/toolkit";
import type { UserLogin, userRegister} from "../../utils/types";
import {base_url, base_user, createToken} from "../../utils/constatnts.ts";

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
    async (user: UserLogin) => {
        const response = await fetch(`${base_user}/fetch`, {
            method: "POST",
            headers: {
                "Authorization": createToken(user.login, user.password),
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
        if (response.status === 401) {
            throw new Error(`User ${user.login}already Unauthorized`);
        }
        if (!response.ok) {
            throw new Error(`Something went wrong`);
        }
        const data = await response.json();
        const token = createToken(user.login, user.password);
        return {user: data, token};
    }
)
