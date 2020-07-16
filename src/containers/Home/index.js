import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import HomeLayout from '../../layout/HomeLayout';
import RecommendItem from '../../components/home/maincontent/recommend/RecommendItem';
import { getRecommendList } from "../../redux/reducers/recommends";

const Home = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecommendList());
  }, [dispatch]);

  const recommendList = useSelector((state) => state.recommends.recommendList);

  let outputList = null;

  if (recommendList.length > 0) {
    outputList = recommendList.map((recommendItem) => (
      <RecommendItem key={recommendItem.id} recommendItem={recommendItem} />
    ));
  }

  return (
    <HomeLayout>
      {outputList}
    </HomeLayout>
  );
};

export default Home;

