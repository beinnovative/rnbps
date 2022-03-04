import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import constants from "../constants";
import { Alert } from "react-native"
import Auth from "../api/auth"
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
export interface ResponseGenerator {
    config?: any,
    data?: any,
    headers?: any,
    request?: any,
    status?: number,
    statusText?: string
}

export function* login(action: any) {
    yield load("loading");
    const response:ResponseGenerator = yield call(Auth.login, action.payload);
    // console.log("res", response);
    if (response.status === 200) {
        yield put({
            type: constants("auth").reducers.login.success,
            payload: response.data,
        });
        yield unload("loading");
        // After Login Navigation....
        const { navigation } = action.payload;
        let nav = '';
        navigation.navigate(nav, { params: "" })
    } else {
        yield error("login", response, null);
        yield unload("loading");
    }
}

function* error(type: string, response: any, message: any) {
    let status = 0;
    if (response) {
        status = response.status || 0
    }
    yield put({
        type: constants("auth").reducers[type].error,
        payload: {
            status: status,
            message: message || "We ran into some issues and are looking into it."
        },
    });
}

function* load(type: any) {
    yield put({
        type: constants("auth").reducers[type].load
    });
}

function* unload(type: any) {
    yield put({
        type: constants("auth").reducers[type].unload
    });
}