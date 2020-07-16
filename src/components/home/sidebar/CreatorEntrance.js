import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 320px;
  height: 60px;
  margin-bottom: 10px;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 1px 3px #bbb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: #868686;
  cursor: pointer;
`;

const LeftContainer = styled.div`
  display: flex;
`;

const RightContainer = styled.div`
  display: flex;
`;

const LeftText = styled.div`
  margin-left: 10px;
`;

const RightText = styled.div`
  margin-right: 10px;
  color: #3486f7;
`;

const CreatorEntrance = (props) => {
  return (
    <Card>
      <LeftContainer>
        <i className="iconfont icon-solid-person"></i>
        <LeftText>创作中心</LeftText>
      </LeftContainer>
      <RightContainer>
        <RightText>去开通</RightText>
        <i className="iconfont icon-xiangyou"></i>
      </RightContainer>
    </Card>
  );
};

export default CreatorEntrance;
