import { SET_METHODS, REMOVE_METHODS } from './types';

const setMethods = user => ({ type: SET_METHODS, payload: user });

const removeMethods = () => ({
    type: REMOVE_METHODS
});

export { setMethods, removeMethods };
