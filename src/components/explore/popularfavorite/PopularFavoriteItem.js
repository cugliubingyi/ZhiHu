import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { togglePopularFavoriteAttention } from "../../../redux/reducers/explores";

const Wrapper = styled.div`
  width: 530px;
  box-shadow: 0 1px 3px 0 rgba(26, 26, 26, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 20px;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
`;

const Header = styled.div`
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 20px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const FollowButton = styled.button`
  width: 100px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  font-weight: bold;
  background: #eff5fe;
  color: #3486f7;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  span {
    line-height: 28px;
    color: #868686;
    margin-left: 4px;
    font-size: 14px;
  }
`;

const Avatar = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 4px;
`;

const CreatorName = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
  line-height: 28px;
`;

const HotListWrapper = styled.div`
  padding: 20px 0;
`;

const HotItemWrapper = styled.div`
  margin-bottom: 20px;
`;

const HotItemTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const HotItemContent = styled.div`
  font-size: 16px;
  margin-top: 8px;
`;

const HotItemInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  span {
    color: #868686;
    font-size: 12px;
  }
`;

const HotItemTag = styled.div`
  width: 32px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 12px;
  color: #868686;
  background: #ebebeb;
  margin-right: 8px;
`;

const Bottom = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #868686;
  display: flex;
  align-items: center;
  position: absolute;
  left: 20px;
  bottom: 20px;
`;

const PopularFavoriteItem = props => {
  const {
    title,
    avatarImgUrl,
    creatorName,
    attentions,
    attention,
    hotList,
    collections
  } = props.popularFavoriteItem;

  const dispatch = useDispatch();

  const handleToggleAttention = (title) => {
    dispatch(togglePopularFavoriteAttention(title));
  };

  return (
    <Wrapper>
      <Header>
        <Top>
          <Title>{title}</Title>
          <FollowButton
            style={{
              color: attention ? "#868686" : "#3486f7",
              background: attention ? "#eee" : "#eff5fe",
            }}
            onClick={() => handleToggleAttention(title)}
          >
            {attention ? "已关注" : "关注收藏夹"}
          </FollowButton>
        </Top>
        <Info>
          <Avatar src={avatarImgUrl} alt="avatar" />
          <CreatorName>{creatorName}</CreatorName>
          <span>创建 ｜ {attentions}人关注</span>
        </Info>
      </Header>
      <HotListWrapper>
        {hotList.map((hotItem) => {
          return (
            <HotItemWrapper key={hotItem.title}>
              <HotItemTitle>{hotItem.title}</HotItemTitle>
              <HotItemContent>{hotItem.content}</HotItemContent>
              <HotItemInfo>
                <HotItemTag>回答</HotItemTag>
                <span>
                  {hotItem.agreements}赞同 · {hotItem.comments}评论
                </span>
              </HotItemInfo>
            </HotItemWrapper>
          );
        })}
      </HotListWrapper>
      <Bottom>
        <span>已收藏{collections}条内容</span>
        <i className="iconfont icon-xiangyou"></i>
      </Bottom>
    </Wrapper>
  );
};

export default PopularFavoriteItem;