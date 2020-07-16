import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { increaseRecommendAgreements, decreaseRecommendAgreements } from "../../../../redux/reducers/recommends";

const RecommendWrapper = styled.div`
    padding: 20px;
    border-bottom: 1px solid #f0f2f6;
`;

const RecommendTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #000;
    line-height: 30px;
`;

const RecommendContent = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const RecommendPic = styled.img`
    width: 200px;
    height: 100px;
    margin-right: 20px;
`;

const RecommendText = styled.div`
    font-size: 16px;
    line-height: 24px;
    color: #000;
`;

const RecommendBottom = styled.div`
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

const RecommendItem = props => {
    const dispatch = useDispatch();

    const handleAgree = (id) => {
        dispatch(increaseRecommendAgreements(id));
    }

    const handleDisagree = (id) => {
        dispatch(decreaseRecommendAgreements(id));
    }

    return (
      <RecommendWrapper>
        <RecommendTitle>{props.recommendItem.title}</RecommendTitle>
        <RecommendContent>
          {props.recommendItem.imgUrl ? (
            <RecommendPic src={props.recommendItem.imgUrl} alt="pic" />
          ) : null}
          <RecommendText>{props.recommendItem.content}</RecommendText>
        </RecommendContent>
        <RecommendBottom>
          <VoteButton
            style={{
              background: props.recommendItem.agree ? "#3486f7" : "#ebf2fe",
              color: props.recommendItem.agree ? "#fff" : "#3486f7",
            }}
            onClick={() => handleAgree(props.recommendItem.id)}
          >
            <i className="iconfont icon-shangjiantou"></i>
            <span>{props.recommendItem.agree ? "已" : null}赞同</span>
            <span>{props.recommendItem.agreements}</span>
          </VoteButton>
          <VoteButton
            style={{
              background: props.recommendItem.disagree ? "#3486f7" : "#ebf2fe",
              color: props.recommendItem.disagree ? "#fff" : "#3486f7",
            }}
            onClick={() => handleDisagree(props.recommendItem.id)}
          >
            <i className="iconfont icon-xiajiantou"></i>
          </VoteButton>
          <ActionButton>
            <i className="iconfont icon-pinglun"></i>
            <span>
              {props.recommendItem.comments > 0
                ? `${props.recommendItem.comments}条评论`
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
        </RecommendBottom>
      </RecommendWrapper>
    );
};

export default RecommendItem;