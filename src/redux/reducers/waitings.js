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
            const newWaitingList = waitingList.map(waitingItem => {
                return {
                    ...waitingItem,
                    attention: false,
                    later: false
                }
            })
            state.waitingList = newWaitingList;
        },
        removeWaitingItem: (state, action) => {
            const removeItemId = action.payload;
            const waitingList = state.waitingList;
            const newWaitingList = waitingList.filter(waitingItem => {
                return waitingItem.id !== removeItemId;
            });
            state.waitingList = newWaitingList;
        },
        addAttention: (state, action) => {
            const addItemId = action.payload;
            const waitingList = state.waitingList;
            const newWaitingList = waitingList.map(waitingItem => {
                if (waitingItem.id === addItemId) {
                    return {
                        ...waitingItem,
                        attention: !waitingItem.attention
                    }
                } else {
                    return waitingItem;
                }
            });
            state.waitingList = newWaitingList;
        },
        addLaterAnswer: (state, action) => {
            const addItemId = action.payload;
            const waitingList = state.waitingList;
            const newWaitingList = waitingList.map((waitingItem) => {
              if (waitingItem.id === addItemId) {
                return {
                  ...waitingItem,
                  later: !waitingItem.later,
                };
              } else {
                return waitingItem;
              }
            });
            state.waitingList = newWaitingList;
        }
    }
});

const getWaitingList = (listType) => {
    return dispatch => {
        axios.get(`/api/${listType}WaitingList.json`).then((res) => {
          if (res.data && res.data.success) {
            dispatch(getWaitingListSuccess(res.data.data));
          }
        });
    };
};

const { actions, reducer } = waitingsSlice;

export const { getWaitingListSuccess, removeWaitingItem, addAttention, addLaterAnswer } = actions;

export { getWaitingList };

export default reducer;