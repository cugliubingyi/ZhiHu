import React from "react";
import { useDispatch } from 'react-redux';
import styled from "styled-components";

import { toggleLatestTopicAttention } from "../../../redux/reducers/explores";

const LatestTopicItemWrapper = styled.div`
  width: 530px;
  box-shadow: 0 1px 3px 0 rgba(26, 26, 26, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const LatestTopicItemBanner = styled.div`
  width: 100%;
  height: 200px;
  background-size: contain;
`;

const LatestTopicItemTop = styled.div`
  padding: 30px 0;
  margin: 0 20px;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LatestTopicItemInfo = styled.div`
`;

const LatestTopicItemTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const LatestTopicItemCount = styled.div`
  font-size: 12px;
  color: #868686;
  margin-top: 10px;
`;

const LatestTopicItemFollowButton = styled.button`
  border: none;
  outline: none;
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 4px;
  font-weight: bold;
  color: #3486f7;
  background: #eff5fe;
  cursor: pointer;
`;

const LatestTopicItemBottom = styled.div`
  padding: 20px;
`;

const LatestTopicItemTopItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const LatestTopicItemTopTag = styled.div`
  height: 24px;
  line-height: 24px;
  padding: 0 10px;
  text-align: center;
  border-radius: 4px;
  color: #868686;
  background: #eee;
  font-size: 12px;
`;

const LatestTopicItemTopTitle = styled.div`
  margin-left: 12px;
`;

const LatestTopicItem = (props) => {
  const dispatch = useDispatch();

  const handleToggleAttention = title => {
    dispatch(toggleLatestTopicAttention(title));
  }

  return (
    <LatestTopicItemWrapper>
      <LatestTopicItemBanner
        style={{
          background: `url(${props.latestTopicItem.backgroundImgUrl})`,
        }}
      />
      <LatestTopicItemTop>
        <LatestTopicItemInfo>
          <LatestTopicItemTitle>
            {props.latestTopicItem.title}
          </LatestTopicItemTitle>
          <LatestTopicItemCount>
            {props.latestTopicItem.update} · {props.latestTopicItem.browses}浏览
          </LatestTopicItemCount>
        </LatestTopicItemInfo>
        <LatestTopicItemFollowButton
          style={{
            color: props.latestTopicItem.attention ? "#868686" : "#3486f7",
            background: props.latestTopicItem.attention ? "#eee" : "#eff5fe"
          }}
          onClick={() => handleToggleAttention(props.latestTopicItem.title)}
        >
          {props.latestTopicItem.attention ? "已关注" : "关注专题"}
        </LatestTopicItemFollowButton>
      </LatestTopicItemTop>
      <LatestTopicItemBottom>
        {props.latestTopicItem.topList.map((topItem) => {
          return (
            <LatestTopicItemTopItem key={topItem.title}>
              <LatestTopicItemTopTag>{topItem.tag}</LatestTopicItemTopTag>
              <LatestTopicItemTopTitle>{topItem.title}</LatestTopicItemTopTitle>
            </LatestTopicItemTopItem>
          );
        })}
      </LatestTopicItemBottom>
    </LatestTopicItemWrapper>
  );
};

export default LatestTopicItem;
