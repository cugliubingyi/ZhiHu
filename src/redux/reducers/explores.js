import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const exploresSlice = createSlice({
  name: "explores",
  initialState: {
    latestTopicList: [],
    roundTableDiscussionList: [],
    popularFavoriteList: [],
    columnList: [],
  },
  reducers: {
    getExploreListSuccess: (state, action) => {
      const latestTopicList = action.payload.latestTopicList;
      const roundTableDiscussionList = action.payload.roundTableDiscussionList;
      const popularFavoriteList = action.payload.popularFavoriteList;
      const columnList = action.payload.columnList;
      state.latestTopicList = latestTopicList;
      state.roundTableDiscussionList = roundTableDiscussionList;
      state.popularFavoriteList = popularFavoriteList;
      state.columnList = columnList;
    },
    toggleLatestTopicAttention: (state, action) => {
      const latestTopicList = state.latestTopicList;
      const newLatestTopicList = latestTopicList.map((latestTopicItem) => {
        if (latestTopicItem.title === action.payload) {
          return {
            ...latestTopicItem,
            attention: !latestTopicItem.attention,
          };
        } else {
          return latestTopicItem;
        }
      });
      state.latestTopicList = newLatestTopicList;
    },
    toggleRoundTableDiscussionAttention: (state, action) => {
      const roundTableDiscussionList = state.roundTableDiscussionList;
      const newRoundTableDiscussionList = roundTableDiscussionList.map(
        (roundTableDiscussionItem) => {
          if (roundTableDiscussionItem.title === action.payload) {
            if (roundTableDiscussionItem.attention) {
              return {
                ...roundTableDiscussionItem,
                attention: !roundTableDiscussionItem.attention,
                attentions: --roundTableDiscussionItem.attentions,
              };
            } else {
              return {
                ...roundTableDiscussionItem,
                attention: !roundTableDiscussionItem.attention,
                attentions: ++roundTableDiscussionItem.attentions,
              };
            }
          } else {
            return roundTableDiscussionItem;
          }
        }
      );
      state.roundTableDiscussionList = newRoundTableDiscussionList;
    },
    togglePopularFavoriteAttention: (state, action) => {
      const popularFavoriteList = state.popularFavoriteList;
      const newPopularFavoriteList = popularFavoriteList.map(
        (popularFavoriteItem) => {
          if (popularFavoriteItem.title === action.payload) {
            if (popularFavoriteItem.attention) {
              return {
                ...popularFavoriteItem,
                attention: !popularFavoriteItem.attention,
                attentions: --popularFavoriteItem.attentions,
              };
            } else {
              return {
                ...popularFavoriteItem,
                attention: !popularFavoriteItem.attention,
                attentions: ++popularFavoriteItem.attentions,
              };
            }
          } else {
            return popularFavoriteItem;
          }
        }
      );
      state.popularFavoriteList = newPopularFavoriteList;
    }
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

export const {
  getExploreListSuccess,
  toggleLatestTopicAttention,
  toggleRoundTableDiscussionAttention,
  togglePopularFavoriteAttention,
} = actions;

export { getExploreList };

export default reducer;
