import {createAsyncThunk} from "@reduxjs/toolkit";
import type {UserData, userRegister} from "../../utils/types";
import {base_url, base_user, createToken, createUser} from "../../utils/constatnts.ts";

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
    async (user:  UserData) => {
const response = await fetch(`${base_user}/account/fetch`, {
    method: "POST",
    headers: {
        "Authorization": createToken(user.firstName, user.lastName)
    },
    body: JSON.stringify(user)
})
        if (response.status === 401) {
            throw new Error(`UUser ${user.firstName} ,${user.lastName}already Unauthorized`);
        }
        if (!response.ok) {
            throw new Error(`Something went wrong`);
        }
        const data = await response.json();
        const token = createUser(user.firstName, user.lastName);
        return {user: data, token};
    }
)
