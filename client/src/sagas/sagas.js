import {takeLatest, call, put} from 'redux-saga/effects';
import axios from 'axios';

export function* watcherSaga() {
    yield takeLatest('API_CALL_DECODE', decodeSaga);
}

function fetchData(url, method = 'get', headers = {} ) {
    return axios({
        method: method,
        headers: headers,
        url: url
    });
}

function* decodeSaga({token}) {
    try {
        console.log(token)
    } catch (error) {
        
    }
}

