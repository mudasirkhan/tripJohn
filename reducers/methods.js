import { SET_METHOD, REMOVE_METHOD } from '../actions/types';

const INITIAL_USER = [
    { name: 'Net Banking', number: 1232111111, bal: '2342' },
    { name: 'Credit Card', number: 9873801843, bal: '254052' }
];

const methodReducer = (state = INITIAL_USER, action) => {
    switch (action.type) {
    case SET_METHOD:
        return { ...action.payload };
    case REMOVE_METHOD:
        return { ...INITIAL_USER };
    default:
        return state;
    }
};


export default methodReducer;
