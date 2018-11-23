const API_CALL_DECODE = 'API_CALL_DECODE';
const API_CALL_DECODE_SUCCESS = 'API_CALL_DECODE_SUCCESS';

const ON_SIGNATURE_CHANGE = 'ON_SIGNATURE_CHANGE';
const ON_SIGNATURE_CHANGE_SUCCESS = 'ON_SIGNATURE_CHANGE_SUCCESS';

const API_CALL_FAILURE = 'API_CALL_FAILURE';

const initialState = {
    fetching: false,
    tokenObj: {},
    signature: {secret: ''},
    isValid: true,
    error: null
};

export function reducers(state = initialState, action) {
    switch (action.type) {
        case API_CALL_DECODE:
            return {...state, fetching: true, error: null};
        case API_CALL_DECODE_SUCCESS:
            return {...state, fetching: false, tokenObj: action.tokenObj};
        case ON_SIGNATURE_CHANGE:
            return {...state, fetching: false, signature: action.signature};
        case API_CALL_FAILURE:
            return { ...state, fetching: false,  error: action.error };
        default:
            return state;
    }
}
