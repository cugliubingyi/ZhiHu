import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const recommendsSlice = createSlice({
    name: "recommends",
    initialState: {
        recommendList: []
    },
    reducers: {
        getRecommendListSuccess: (state, action) => {
            const recommendList = action.payload.recommendList;
            state.recommendList = recommendList;
        }
    }
});

const getRecommendList = () => {
    return dispatch => {
        axios.get('/api/recommendList.json').then(res => {
            if (res.data && res.data.success) {
                dispatch(getRecommendListSuccess(res.data.data));
            }
        })
    }
}

const { actions, reducer } = recommendsSlice;

export const { getRecommendListSuccess } = actions;

export { getRecommendList };

export default reducer;