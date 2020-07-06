import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const hotsSlice = createSlice({
    name: 'hots',
    initialState: {
        hotList: []
    },
    reducers: {
        getHotListSuccess: (state, action) => {
            const hotList = action.payload.hotList;
            state.hotList = hotList;
        }
    }
});

const getHotList = () => {
    return dispatch => {
        axios.get('/api/hotList.json').then(res => {
            if (res.data && res.data.success) {
                dispatch(getHotListSuccess(res.data.data));
            }
        })
    }
};

const { actions, reducer } = hotsSlice;

export const { getHotListSuccess } = actions;

export { getHotList };

export default reducer;
