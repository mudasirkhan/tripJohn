import { SET_USER, REMOVE_USER, SET_AVATAR, ALTER_USER } from '../actions/types';

const INITIAL_USER = {
};

const userReducer = (state = INITIAL_USER, action) => {
    switch (action.type) {
    case SET_USER:
        return { ...INITIAL_USER, ...action.payload };
    case REMOVE_USER:
        return { ...INITIAL_USER };
    case SET_AVATAR:
        return { ...state, avatar: action.payload };
    case ALTER_USER:
        return { ...state, ...action.payload };
    default:
        return state;
    }
};


export default userReducer;
