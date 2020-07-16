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
            const newRecommendList = recommendList.map(recommendItem => {
                return {
                    ...recommendItem,
                    agree: false,
                    disagree: false
                };
            });
            state.recommendList = newRecommendList;
        },
        increaseRecommendAgreements: (state, action) => {
            const newRecommendList = state.recommendList.map(recommendItem => {
                if (recommendItem.id === action.payload) {
                    if (recommendItem.agree) {
                        return {
                            ...recommendItem,
                            agree: !recommendItem.agree,
                            disagree: 
                              recommendItem.disagree && !recommendItem.agree
                                ? !recommendItem.disagree
                                : recommendItem.disagree,
                            agreements: --recommendItem.agreements
                        };
                    } else {
                        return {
                          ...recommendItem,
                          agree: !recommendItem.agree,
                          disagree:
                            recommendItem.disagree && !recommendItem.agree
                              ? !recommendItem.disagree
                              : recommendItem.disagree,
                          agreements: ++recommendItem.agreements,
                        };
                    }
                } else {
                    return recommendItem;
                }
            });
            state.recommendList = newRecommendList;
        },
        decreaseRecommendAgreements: (state, action) => {
            const newRecommendList = state.recommendList.map(recommendItem => {
                if (recommendItem.id === action.payload) {
                    if (recommendItem.agree && !recommendItem.disagree) {
                        return {
                            ...recommendItem,
                            disagree: !recommendItem.disagree,
                            agree: !recommendItem.agree,
                            agreements: --recommendItem.agreements
                        }
                    }
                    return {
                        ...recommendItem,
                        disagree: !recommendItem.disagree
                    };
                } else {
                    return recommendItem;
                }
            });
            state.recommendList = newRecommendList;
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

export const { getRecommendListSuccess, increaseRecommendAgreements, decreaseRecommendAgreements } = actions;

export { getRecommendList };

export default reducer;