import { GET_PAYTM, REMOVE_PAYTM } from '../actions/types';

const INITIAL_USER = {
    bal: 'Rs 999',
    number: '928367324'
};

const paytmReducer = (state = INITIAL_USER, action) => {
    switch (action.type) {
    case GET_PAYTM:
        return { ...action.payload };
    case REMOVE_PAYTM:
        return { ...INITIAL_USER };
    default:
        return state;
    }
};


export default paytmReducer;
