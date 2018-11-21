const API_CALL_DECODE = 'API_CALL_DECODE';
const API_CALL_DECODE_SUCCESS = 'API_CALL_DECODE_SUCCESS';

const API_CALL_FAILURE = 'API_CALL_FAILURE';

const initialState = {
    fetching: false,
    tokenObj: {},
    error: null
};

export function reducers(state = initialState, action) {
    switch (action.type) {
        case API_CALL_DECODE:
            return {...state, fetching: true, error: null};
        case API_CALL_DECODE_SUCCESS:
            return {...state, fetching: false, tokenObj: action.tokenObj};
        case API_CALL_FAILURE:
            return { ...state, fetching: false,  error: action.error };
        default:
            return state;
    }
}
