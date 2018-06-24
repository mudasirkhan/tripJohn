
const INITIAL_USER = '';

const token = (state = INITIAL_USER, action) => {
    switch (action.type) {
        case "TOKEN":
            return action.payload;
        default:
            return state;
    }
};


export default token;
