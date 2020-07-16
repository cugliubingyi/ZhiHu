import React from 'react';

import styled from 'styled-components';

const ExploreTitleWrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 20px;
  display: flex;
  font-size: 24px;
  i {
    color: #3486f7;
    margin-right: 16px;
    font-size: 24px;
  }
  span {
    font-weight: bold;
  }
`;

const ExploreTitle = props => {
    const { iconName, titleName } = props;

    return (
        <ExploreTitleWrapper>
            <i className={`iconfont ${iconName}`}></i>
            <span>{titleName}</span>
        </ExploreTitleWrapper>
    );
};

export default ExploreTitle;