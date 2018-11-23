import {takeLatest, takeEvery, call, put} from 'redux-saga/effects';
import axios from 'axios';

import SignDTO from './DTOs/signDTO';

export function* watcherSaga() {
    yield takeLatest('API_CALL_DECODE', decodeSaga);
    yield takeLatest('ON_SIGNATURE_CHANGE', signatureSaga);
}

function fetchData(url, method = 'get', data = {}, headers = {}) {
    return axios({
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        url: url,
        data: data
    });
}


function* decodeSaga({token}) {
    try {
        const {data: tokenObj} = yield fetchData('http://localhost:3001/api/decode/', 'post', {token: token});
        yield put({type: 'API_CALL_DECODE_SUCCESS', tokenObj, token});
    } catch (error) {
        yield put({type: 'API_CALL_FAILURE', error});
    }
}

function* signatureSaga({signature}) {
    try {
        const {data: tokenData} = yield fetchData('http://localhost:3001/api/sign/', 'post', {
            secret: '123',
            expiresIn: '1h',
            claims: {iss: 'admin', aux: {name: 'user'}}
        });
        yield decodeSaga(tokenData);
        yield put({type: 'ON_SIGNATURE_CHANGE_SUCCESS', signature, token: tokenData.token});
    } catch (error) {
        yield put({type: 'API_CALL_FAILURE', error});
    }
}

