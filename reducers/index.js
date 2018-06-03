import { createStore } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import locationReducer from './location';
import userReducer from './user';
import paytmReducer from './payments';
import methodsReducer from './methods';


const config = {
    key: 'tripJohnPersistConfig',
    whitelist: ['user'],
    storage: AsyncStorage
};

const reducer = persistCombineReducers(config, {
    location: locationReducer,
    user: userReducer,
    payment: paytmReducer,
    methods: methodsReducer,
});

const store = createStore(reducer);

let reHydratedResolver = null;
const reHydratedStore = new Promise(resolve => {
    reHydratedResolver = resolve;
});

persistStore(store, null, () => {
    reHydratedResolver();
});

export { reHydratedStore };
export default store;
