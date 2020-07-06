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
      state.followList = followList;
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

export const { getFollowListSuccess } = actions;

export { getFollowList };

export default reducer;
