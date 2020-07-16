import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { increaseFollowAgreements, decreaseFollowAgreements } from "../../../../redux/reducers/follows";

const FollowWrapper = styled.div`
    padding: 20px;
    border-bottom: 1px solid #f0f2f6;
`;

const FollowSubTitle = styled.div`
    font-size: 14px;
    color: #868686;
    line-height: 24px;
`;

const FollowTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #000;
    line-height: 30px;
`;

const FollowContent = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FollowPic = styled.img`
    width: 200px;
    height: 100px;
    margin-right: 20px;
`;

const FollowText = styled.div`
    font-size: 16px;
    line-height: 24px;
    color: #000;
`;

const FollowBottom = styled.div`
    display: flex;
    margin-top: 10px;
    width: 100%;
    height: 32px;
`;

const VoteButton = styled.button`
    height: 32px;
    padding: 0 12px;
    margin-right: 6px;
    text-align: center;
    line-height: 32px;
    background: #ebf2fe;
    color: #3486f7;
    border: none;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    span {
        margin-left: 6px;
    }
`;

const ActionButton = styled.button`
    border: none;
    outline: none;
    margin-left: 24px;
    background: #fff;
    color: #868686;
    cursor: pointer;
    i {
        margin-right: 6px;
    }
`;

const FollowItem = props => {
    const dispatch = useDispatch();

    const handleAgree = (id) => {
        dispatch(increaseFollowAgreements(id));
    }

    const handleDisagree = (id) => {
        dispatch(decreaseFollowAgreements(id));
    }

    return (
      <FollowWrapper>
        <FollowSubTitle>{props.followItem.subtitle}</FollowSubTitle>
        <FollowTitle>{props.followItem.title}</FollowTitle>
        <FollowContent>
          {props.followItem.imgUrl ? (
            <FollowPic src={props.followItem.imgUrl} alt="pic" />
          ) : null}
          <FollowText>{props.followItem.content}</FollowText>
        </FollowContent>
        <FollowBottom>
          <VoteButton
            style={{
              background: props.followItem.agree ? "#3486f7" : "#ebf2fe",
              color: props.followItem.agree ? "#fff" : "#3486f7",
            }}
            onClick={() => handleAgree(props.followItem.id)}
          >
            <i className="iconfont icon-shangjiantou"></i>
            <span>{props.followItem.agree ? "已" : null}赞同</span>
            <span>{props.followItem.agreements}</span>
          </VoteButton>
          <VoteButton
            style={{
              background: props.followItem.disagree ? "#3486f7" : "#ebf2fe",
              color: props.followItem.disagree ? "#fff" : "#3486f7",
            }}
            onClick={() => handleDisagree(props.followItem.id)}
          >
            <i className="iconfont icon-xiajiantou"></i>
          </VoteButton>
          <ActionButton>
            <i className="iconfont icon-pinglun"></i>
            <span>
              {props.followItem.comments > 0
                ? `${props.followItem.comments}条评论`
                : "添加评论"}
            </span>
          </ActionButton>
          <ActionButton>
            <i className="iconfont icon-zhifeiji"></i>
            <span>分享</span>
          </ActionButton>
          <ActionButton>
            <i className="iconfont icon-shoucang"></i>
            <span>收藏</span>
          </ActionButton>
          <ActionButton>
            <i className="iconfont icon-aixin"></i>
            <span>喜欢</span>
          </ActionButton>
          <ActionButton>
            <i className="iconfont icon-gengduo"></i>
          </ActionButton>
        </FollowBottom>
      </FollowWrapper>
    );
};

export default FollowItem;