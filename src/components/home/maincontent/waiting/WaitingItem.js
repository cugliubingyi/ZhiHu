import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { removeWaitingItem, addAttention, addLaterAnswer } from '../../../../redux/reducers/waitings';

const WaitingItemWrapper = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #f6f6f6;
`;

const WaitingItemTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const WaitingItemTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const WaitingRemoveButton = styled.button`
  border: none;
  outline: none;
  color: #868686;
  font-size: 14px;
  width: 14px;
  height: 14px;
  background: #fff;
  cursor: pointer;
`;

const WaitingItemBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WaitingItemButtons = styled.div`
  display: flex;
  align-items: center;
`;

const WaitingItemBlueButton = styled.button`
  outline: none;
  border: 1px solid #3486f7;
  border-radius: 4px;
  text-align: center;
  width: 100px;
  height: 30px;
  line-height: 30px;
  color: #3486f7;
  background: #fff;
  font-size: 14px;
  cursor: pointer;
  i {
    margin-right: 4px;
  }
`;

const WaitingItemGreyButton = styled.button`
  outline: none;
  border: none;
  text-align: center;
  width: 100px;
  height: 30px;
  line-height: 30px;
  color: #868686;
  background: #fff;
  font-size: 14px;
  margin-left: 20px;
  cursor: pointer;
  i {
    margin-right: 4px;
  }
`;

const WaitingItemAddition = styled.div`
  font-size: 14px;
  color: #868686;
`;

const WaitingItem = props => {
  const [mouseIn, setMouseIn] = useState(false);
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setMouseIn(true);
  }

  const handleMouseLeave = () => {
    setMouseIn(false);
  }

  const handleRemoveWaitingItem = (id) => {
    dispatch(removeWaitingItem(id));
  }

  const handleAddAttention = (id) => {
    dispatch(addAttention(id));
  }

  const handleAddLaterAnswer = (id) => {
    dispatch(addLaterAnswer(id));
  }

  let removeButton = null;

  if (mouseIn) {
    removeButton = (
      <WaitingRemoveButton onClick={() => handleRemoveWaitingItem(props.waitingItem.id)}>
        <i className="iconfont icon-cuo"></i>
      </WaitingRemoveButton>
    );
  }

  return (
    <WaitingItemWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <WaitingItemTop>
        <WaitingItemTitle>{props.waitingItem.title}</WaitingItemTitle>
        {removeButton}
      </WaitingItemTop>
      <WaitingItemBottom>
        <WaitingItemButtons>
          <WaitingItemBlueButton>
            <i className="iconfont icon-bi"></i>
            <span>写回答</span>
          </WaitingItemBlueButton>
          <WaitingItemGreyButton
            style={{
              color: props.waitingItem.attention ? "#b7bcc8" : "#868686",
            }}
            onClick={() => handleAddAttention(props.waitingItem.id)}
          >
            {props.waitingItem.attention ? (
              "已关注"
            ) : (
              <>
                <i className="iconfont icon-jiahao"></i>
                <span>关注问题</span>
              </>
            )}
          </WaitingItemGreyButton>
          <WaitingItemGreyButton
            style={{
              color: props.waitingItem.later ? "#b7bcc8" : "#868686",
            }}
            onClick={() => handleAddLaterAnswer(props.waitingItem.id)}
          >
            {props.waitingItem.later ? (
              "已添加"
            ) : (
              <>
                <i className="iconfont icon-dengdai"></i>
                <span>稍后答</span>
              </>
            )}
          </WaitingItemGreyButton>
        </WaitingItemButtons>
        <WaitingItemAddition>
          {props.waitingItem.answers}个回答 · {props.waitingItem.browses}个浏览
        </WaitingItemAddition>
      </WaitingItemBottom>
    </WaitingItemWrapper>
  );
}

export default WaitingItem;