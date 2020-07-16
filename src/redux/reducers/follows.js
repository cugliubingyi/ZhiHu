import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const followsSlice = createSlice({
  name: "follows",
  initialState: {
    followList: [],
  },
  reducers: {
    getFollowListSuccess: (state, action) => {
      const followList = action.payload.followList;
      const newFollowList = followList.map((followItem) => {
        return {
          ...followItem,
          agree: false,
          disagree: false,
        };
      });
      state.followList = newFollowList;
    },
    increaseFollowAgreements: (state, action) => {
      const newFollowList = state.followList.map((followItem) => {
        if (followItem.id === action.payload) {
          if (followItem.agree) {
            return {
              ...followItem,
              agree: !followItem.agree,
              disagree:
                followItem.disagree && !followItem.agree
                  ? !followItem.disagree
                  : followItem.disagree,
              agreements: --followItem.agreements,
            };
          } else {
            return {
              ...followItem,
              agree: !followItem.agree,
              disagree:
                followItem.disagree && !followItem.agree
                  ? !followItem.disagree
                  : followItem.disagree,
              agreements: ++followItem.agreements,
            };
          }
        } else {
          return followItem;
        }
      });
      state.followList = newFollowList;
    },
    decreaseFollowAgreements: (state, action) => {
      const newFollowList = state.followList.map((followItem) => {
        if (followItem.id === action.payload) {
          if (followItem.agree && !followItem.disagree) {
            return {
              ...followItem,
              disagree: !followItem.disagree,
              agree: !followItem.agree,
              agreements: --followItem.agreements,
            };
          }
          return {
            ...followItem,
            disagree: !followItem.disagree,
          };
        } else {
          return followItem;
        }
      });
      state.followList = newFollowList;
    },
  },
});

const getFollowList = () => {
  return (dispatch) => {
    axios.get("/api/followList.json").then((res) => {
      if (res.data && res.data.success) {
        dispatch(getFollowListSuccess(res.data.data));
      }
    });
  };
};

const { actions, reducer } = followsSlice;

export const { getFollowListSuccess, decreaseFollowAgreements, increaseFollowAgreements } = actions;

export { getFollowList };

export default reducer;
