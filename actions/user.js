import { SET_USER, REMOVE_USER, SET_AVATAR, ALTER_USER } from './types';

const setUser = user => ({ type: SET_USER, payload: user });

const removeUser = () => ({
    type: REMOVE_USER
});

const setAvatar = avatarPath => ({
    type: SET_AVATAR,
    payload: avatarPath
});

const alterUser = user => ({
    type: ALTER_USER,
    payload: user
});

export { setUser, removeUser, setAvatar, alterUser };
