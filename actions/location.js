import { SET_LOCATION_PERMISSION, SET_LOCATION } from './types';

const setLocationPermission = given => ({ type: SET_LOCATION_PERMISSION, payload: given });

const setLocation = (latitude, longitude) => ({
    type: SET_LOCATION, payload: { latitude, longitude }
});

export { setLocationPermission, setLocation };
