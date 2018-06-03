import { SET_PAYTM, REMOVE_PAYTM } from './types';

const setPaytm = user => ({ type: SET_PAYTM, payload: user });

const removePaytm = () => ({
    type: REMOVE_PAYTM
});

export { setPaytm, removePaytm };
