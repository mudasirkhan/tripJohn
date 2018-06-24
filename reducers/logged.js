import { SET_USER, REMOVE_USER, SET_AVATAR, ALTER_USER } from '../actions/types';

const INITIAL_USER = false;

const logged = (state = INITIAL_USER, action) => {
    switch (action.type) {
        case "LOGIN":
            return action.payload;
        default:
            return state;
    }
};


export default logged;
