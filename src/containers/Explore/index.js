import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import SiteLayout from '../../layout/SiteLayout';
import LatestTopic from '../../components/explore/latesttopic/LatestTopic';
import RoundTableDiscussion from '../../components/explore/roundtablediscussion/RoundTableDiscussion';
import PopularFavorite from '../../components/explore/popularfavorite/PopularFavorite';
import Column from '../../components/explore/column/Column';
import { getExploreList } from '../../redux/reducers/explores';
import { getUserInfo } from '../../redux/reducers/user';

const ExploreWrapper = styled.div`
  background: #f6f6f6;
  margin-top: 60px;
  padding-bottom: 240px;
`;

const ExploreContainer = styled.div`
  width: 1080px;
  margin: 0 auto;
`;

const Explore = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExploreList());
    dispatch(getUserInfo());
  }, [dispatch]);

  return (
    <SiteLayout>
      <ExploreWrapper>
        <ExploreContainer>
          <LatestTopic />
          <RoundTableDiscussion />
          <PopularFavorite />
          <Column />
        </ExploreContainer>
      </ExploreWrapper>
    </SiteLayout>
  );
};

export default Explore;
