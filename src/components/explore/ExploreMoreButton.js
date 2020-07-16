import React from 'react';
import styled from 'styled-components';

const ExploreMoreButtonWrapper = styled.div`
    margin: 20px auto;
    padding: 0 24px;
    width: 140px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    color: #868686;
    background: #fff;
    font-weight: bold;
    border-radius: 24px;
    cursor: pointer;
`;

const ExploreMoreButton = props => {
    return (
        <ExploreMoreButtonWrapper>
            <span>查看更多{props.viewObject}</span>
            <i className="iconfont icon-xiangyou"></i>
        </ExploreMoreButtonWrapper>
    );
};

export default ExploreMoreButton;