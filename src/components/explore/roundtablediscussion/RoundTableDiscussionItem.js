import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { toggleRoundTableDiscussionAttention } from "../../../redux/reducers/explores";

const Wrapper = styled.div`
  width: 530px;
  box-shadow: 0 1px 3px 0 rgba(26, 26, 26, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const Banner = styled.div`
  width: 100%;
  height: 240px;
  background-size: contain;
  padding: 60px 20px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Content = styled.div`
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  width: 320px;
`;

const BannerBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BannerBottomLeft = styled.div`
  display: flex;
  span {
    color: #868686;
    font-size: 12px;
    line-height: 28px;
  }
`;

const Avatar = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 4px;
  margin-right: 8px;
`;

const FollowButton = styled.button`
  width: 100px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border-radius: 4px;
  background: #fff;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
`;

const HotListWrapper = styled.div`
  padding: 20px;
`;

const HotItemWrapper = styled.div`
  margin-bottom: 8px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const HotItemTitle = styled.div`
  font-size: 16px;
`;

const HotItemAnswer = styled.div`
  font-size: 12px;
  color: #999;
  margin-top: 8px;
`;

const RoundTableDiscussionItem = props => {
  const {
    backgroundImgUrl,
    title,
    content,
    avatarImgUrls,
    participate,
    attentions,
    attention,
    attentionButtonColor,
    hotList
  } = props.roundTableDiscussionItem;

  const dispatch = useDispatch();

  const handleToggleAttention = (title) => {
    dispatch(toggleRoundTableDiscussionAttention(title));
  };

  return (
    <Wrapper>
      <Banner
        style={{
          background: `url(${backgroundImgUrl})`,
        }}
      >
        <Title>{title}</Title>
        <Content>{content}</Content>
        <BannerBottom>
          <BannerBottomLeft>
            {avatarImgUrls.map((avatarImgUrl) => {
              return <Avatar key={avatarImgUrl} src={avatarImgUrl} alt="avatar" />;
            })}
            <span>
              {participate}位嘉宾参与 ｜ {attentions}人关注
            </span>
          </BannerBottomLeft>
          <FollowButton
            style={{
              color: attentionButtonColor
            }}
            onClick={() => handleToggleAttention(title)}
          >
            {attention ? "已关注" : "关注圆桌"}
          </FollowButton>
        </BannerBottom>
      </Banner>
      <HotListWrapper>
        {hotList.map((hotItem) => {
          return (
            <HotItemWrapper key={hotItem.title}>
              <HotItemTitle>{hotItem.title}</HotItemTitle>
              <HotItemAnswer>{hotItem.answers}个回答</HotItemAnswer>
            </HotItemWrapper>
          );
        })}
      </HotListWrapper>
    </Wrapper>
  );
};

export default RoundTableDiscussionItem;