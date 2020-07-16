import React from 'react';

import LatestTopicList from './LatestTopicList';
import ExploreTitle from '../ExploreTitle';
import ExploreMoreButton from '../ExploreMoreButton';

const LatestTopic = props => {
    return (
      <div>
        <ExploreTitle iconName="icon-xinwen" titleName="最新专题" />
        <LatestTopicList />
        <ExploreMoreButton viewObject="专题" />
      </div>
    );
};

export default LatestTopic;