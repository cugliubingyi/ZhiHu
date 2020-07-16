import React from "react";

import ExploreTitle from "../ExploreTitle";
import ExploreMoreButton from "../ExploreMoreButton";
import RoundTableDiscussionList from "./RoundTableDiscussionList";

const RoundTableDiscussion = (props) => {
  return (
    <div>
      <ExploreTitle iconName="icon-yuan" titleName="圆桌讨论" />
      <RoundTableDiscussionList />
      <ExploreMoreButton viewObject="圆桌" />
    </div>
  );
};

export default RoundTableDiscussion;
