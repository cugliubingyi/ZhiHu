import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import PopularFavoriteItem from "./PopularFavoriteItem";

const PopularFavoriteListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1080px;
  justify-content: space-between;
`;

const PopularFavoriteList = (props) => {
  const popularFavoriteList = useSelector(
    (state) => state.explores.popularFavoriteList
  );

  let outputList = null;

  if (popularFavoriteList.length) {
    outputList = popularFavoriteList.map((popularFavoriteItem) => {
      return (
        <PopularFavoriteItem
          key={popularFavoriteItem.title}
          popularFavoriteItem={popularFavoriteItem}
        />
      );
    });
  }

  return <PopularFavoriteListWrapper>{outputList}</PopularFavoriteListWrapper>;
};

export default PopularFavoriteList;
