import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import LatestTopicItem from './LatestTopicItem';

const LatestTopicListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 1080px;
    justify-content: space-between;
`;

const LatestTopicList = props => {
    const latestTopicList = useSelector(state => state.explores.latestTopicList);

    let outputList = null;

    if (latestTopicList.length) {
        outputList = latestTopicList.map(latestTopicItem => {
            return <LatestTopicItem key={latestTopicItem.title} latestTopicItem={latestTopicItem}  />
        })
    }

    return (
        <LatestTopicListWrapper>
            {outputList}
        </LatestTopicListWrapper>
    );
};

export default LatestTopicList;