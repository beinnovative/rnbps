import { takeEvery, takeLatest } from 'redux-saga/effects'

import { login } from "./auth";

import constants from "../constants";
function* sagas() {
    yield takeLatest(constants("auth").sagas.login, login);
}

export default sagas;