import React from "react";

import ExploreTitle from "../ExploreTitle";
import ExploreMoreButton from "../ExploreMoreButton";
import PopularFavoriteList from "./PopularFavoriteList";

const PopularFavorite = (props) => {
  return (
    <div>
      <ExploreTitle iconName="icon-shoucang" titleName="热门收藏夹" />
      <PopularFavoriteList />
      <ExploreMoreButton viewObject="收藏夹" />
    </div>
  );
};

export default PopularFavorite;
