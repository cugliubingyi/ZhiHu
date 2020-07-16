import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 320px;
  height: 240px;
  margin-bottom: 10px;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 1px 3px #bbb;
`;

const NavTopWrapper = styled.div`
  display: flex;
  width: 320px;
  height: 180px;
`;

const NavTopItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #868686;
  width: 160px;
  height: 60px;
  border-top: 1px solid #f6f6f6;
  border-right: 1px solid #f6f6f6;
  border-bottom: none;
  border-left: none;
  background: #fff;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  &:last-of-type {
    border-right: none;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Icon = styled.i`
  font-size: 24px !important;
  font-weight: bold !important;
`;

const NavTopText = styled.div`
  margin-top: 20px;
`;

const navTopItems = [
  {
    iconName: "icon-wenbenwendang",
    iconColor: "#3486f7",
    iconBackgroundColor: "#e8f0fe",
    textName: "回答问题",
  },
  {
    iconName: "icon-video",
    iconColor: "#f29a39",
    iconBackgroundColor: "#fdf3e8",
    textName: "发视频",
  },
  {
    iconName: "icon-xinbaniconshangchuan-",
    iconColor: "#eec845",
    iconBackgroundColor: "#fdf9e9",
    textName: "写文章",
  },
  {
    iconName: "icon-icon--",
    iconColor: "#5cbcbe",
    iconBackgroundColor: "#ecf7f7",
    textName: "写想法",
  },
];

const NewGlobalWrite = (props) => {
  return (
    <Card>
      <NavTopWrapper>
        {navTopItems.map(navTopItem => {
          return (
            <NavTopItem key={navTopItem.iconName}>
              <IconWrapper
                style={{
                  background: navTopItem.iconBackgroundColor
                }}
              >
                <Icon
                  style={{
                    color: navTopItem.iconColor
                  }}
                  className={`iconfont ${navTopItem.iconName}`}
                />
              </IconWrapper>
              <NavTopText>
                {navTopItem.textName}
              </NavTopText>
            </NavTopItem>
          )
        })}
      </NavTopWrapper>
      <ButtonWrapper>
        <Button>稍后答</Button>
        <Button>草稿箱</Button>
      </ButtonWrapper>
    </Card>
  );
};

export default NewGlobalWrite;
