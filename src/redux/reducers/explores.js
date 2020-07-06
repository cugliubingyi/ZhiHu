import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const exploresSlice = createSlice({
  name: "explores",
  initialState: {
    exploreList: [],
  },
  reducers: {
    getExploreListSuccess: (state, action) => {
      const exploreList = action.payload.exploreList;
      state.exploreList = exploreList;
    },
  },
});

const getExploreList = () => {
  return (dispatch) => {
    axios.get("/api/exploreList.json").then((res) => {
      if (res.data && res.data.success) {
        dispatch(getExploreListSuccess(res.data.data));
      }
    });
  };
};

const { actions, reducer } = exploresSlice;

export const { getExploreListSuccess } = actions;

export { getExploreList };

export default reducer;
