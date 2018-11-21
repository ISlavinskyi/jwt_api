import {takeLatest, call, put} from 'redux-saga/effects';
import axios from 'axios';

export function* watcherSaga() {
    yield takeLatest('API_CALL_DECODE', decodeSaga);
}

function fetchData(url, method = 'get',  data = {}, headers = {}) {
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
        const {data:tokenObj} = yield fetchData('http://localhost:3001/api/decode/', 'post', {token: token});

        yield put({type: 'API_CALL_DECODE_SUCCESS', tokenObj});
    } catch (error) {
        yield put({type: 'API_CALL_FAILURE', error});
    }
}

