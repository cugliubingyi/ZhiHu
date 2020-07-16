import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 255px;
  height: 320px;
  box-shadow: 0 1px 3px 0 rgba(26, 26, 26, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 20px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const Info = styled.div`
  font-size: 12px;
  color: #868686;
  margin-top: 10px;
`;

const Content = styled.div`
  font-size: 14px;
  line-height: 20px;
  margin-top: 20px;
  text-align: center;
`;

const LinkButton = styled.button`
  position: absolute;
  left: 50%;
  bottom: 20px;
  margin-left: -44px;
  width: 88px;
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

const ColumnItem = props => {
  const {
   avatarImgUrl,
   title,
   attentions,
   articles,
   description
  } = props.columnItem;

  return (
    <Wrapper>
      <Avatar src={avatarImgUrl} alt="avatar" />
      <Title>{title}</Title>
      <Info>{attentions} 关注 · {articles} 文章</Info>
      <Content>{description}</Content>
      <LinkButton>进入专栏</LinkButton>
    </Wrapper>
  );
};

export default ColumnItem;