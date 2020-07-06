import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const waitingsSlice = createSlice({
    name: "waitings",
    initialState: {
        waitingList: []
    },
    reducers: {
        getWaitingListSuccess: (state, action) => {
            const waitingList = action.payload.waitingList;
            state.waitingList = waitingList;
        }
    }
});

const getWaitingList = () => {
    return dispatch => {
        axios.get('/api/waitingList.json').then(res => {
            if (res.data && res.data.success) {
                dispatch(getWaitingListSuccess(res.data.data));
            }
        })
    };
};

const { actions, reducer } = waitingsSlice;

export const { getWaitingListSuccess } = actions;

export { getWaitingList };

export default reducer;