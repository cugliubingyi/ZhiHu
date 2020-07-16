import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        avatarImgUrl: '',
        collections: 0,
        attentions: 0,
        invitations: 0
    },
    reducers: {
        getUserInfoSuccess: (state, action) => {
            const { avatarImgUrl, collections, attentions, invitations } = action.payload;
            state.avatarImgUrl = avatarImgUrl;
            state.collections = collections;
            state.attentions = attentions;
            state.invitations = invitations;
        }
    }
});

const getUserInfo = () => {
    return dispatch => {
        axios.get('/api/userInfo.json').then(res => {
            if (res.data && res.data.success) {
                dispatch(getUserInfoSuccess(res.data.data));
            }
        })
    };
};

const { actions, reducer } = userSlice;

export const { getUserInfoSuccess } = actions;

export { getUserInfo };

export default reducer;