import { SET_LOCATION_PERMISSION, SET_LOCATION } from '../actions/types';

const INITIAL_LOCATION = {
    permissionGiven: false,
    latitude: 0.0,
    longitude: 0.0
};

const locationReducer = (state = INITIAL_LOCATION, action) => {
    switch (action.type) {
    case SET_LOCATION_PERMISSION:
        return { ...state, permissionGiven: action.payload };
    case SET_LOCATION:
        return { ...state, latitude: action.payload.latitude, longitude: action.payload.longitude };
    default:
        return state;
    }
};


export default locationReducer;
