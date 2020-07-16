import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import HomeLayout from "../../layout/HomeLayout";
import FollowItem from "../../components/home/maincontent/follow/FollowItem";
import { getFollowList } from "../../redux/reducers/follows";

const Follow = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFollowList());
  }, [dispatch]);

  const followList = useSelector((state) => state.follows.followList);

  let outputList = null;

  if (followList.length > 0) {
    outputList = followList.map((followItem) => (
      <FollowItem key={followItem.id} followItem={followItem} />
    ));
  }

  return (
    <HomeLayout>
      {outputList}
    </HomeLayout>
  );
};

export default Follow;


