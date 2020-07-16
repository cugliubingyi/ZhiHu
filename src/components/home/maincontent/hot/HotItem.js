import React from 'react';
import styled from 'styled-components';

const HotItemWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 16px 16px 16px 0;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  justify-content: space-between;
`;

const HotItemLeftContainer = styled.div`
  display: flex;
`;

const HotItemRank = styled.div`
  font-size: 18px;
  font-weight: bold;
  width: 60px;
  text-align: center;
  padding-top: 3px;
`;

const HotItemContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HotItemTop = styled.div`

`;

const HotItemTitle = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const HotItemContent = styled.div`
  font-size: 14px;
  line-height: 24px;
  margin-top: 8px;
`;

const HotItemBottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const HotItemMetric = styled.div`
  color: #868686;
  font-size: 14px;
  margin-right: 32px;
`;

const HotItemPic = styled.img`
  width: 200px;
  height: 100px;
  border-radius: 4px;
`;

const HotItem = props => {
    return (
      <HotItemWrapper>
        <HotItemLeftContainer>
          <HotItemRank
            style={{
              color: props.hotItem.id > 3 ? "#9d9d9d" : "#f29a39",
            }}
          >
            {props.hotItem.id}
          </HotItemRank>
          <HotItemContainer>
            <HotItemTop>
              <HotItemTitle>{props.hotItem.title}</HotItemTitle>
              {props.hotItem.content && (
                <HotItemContent>{props.hotItem.content}</HotItemContent>
              )}
            </HotItemTop>
            <HotItemBottom>
              <HotItemMetric>
                <i className="iconfont icon-show_renqiredu"></i>
                <span>{props.hotItem.heat}万热度</span>
              </HotItemMetric>
              <HotItemMetric>
                <i className="iconfont icon-zhifeiji"></i>
                <span>分享</span>
              </HotItemMetric>
            </HotItemBottom>
          </HotItemContainer>
        </HotItemLeftContainer>
        {props.hotItem.imgUrl && (
          <HotItemPic src={props.hotItem.imgUrl} alt="pic" />
        )}
      </HotItemWrapper>
    );
};

export default HotItem;