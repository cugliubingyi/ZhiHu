import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 320px;
  height: 200px;
  margin-bottom: 10px;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 1px 3px #bbb;
  display: flex;
  flex-wrap: wrap;
`;

const CategoryItem = styled.div`
  width: 33%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  i {
    margin-bottom: 10px;
    font-size: 24px !important;
  }
  div {
    color: #868686;
  }
`;

const categoryList = [
  {
    iconName: "icon-shandian",
    iconColor: "#f8cf47",
    textName: "Live",
  },
  {
    iconName: "icon-shu",
    iconColor: "#70d088",
    textName: "书店",
  },
  {
    iconName: "icon-yuan",
    iconColor: "#3486f7",
    textName: "圆桌",
  },
  {
    iconName: "icon-bi",
    iconColor: "#3a8914",
    textName: "专栏",
  },
  {
    iconName: "icon-xueyuan-fufeikecheng",
    iconColor: "#5a7ae8",
    textName: "付费咨询",
  },
  {
    iconName: "icon-shu2",
    iconColor: "#5a6bca",
    textName: "百科",
  },
];

const SideBarCategory = (props) => {
  return (
    <Card>
      {categoryList.map(categoryItem => {
        return (
          <CategoryItem key={categoryItem.iconName}>
            <i
              className={`iconfont ${categoryItem.iconName}`}
              style={{
                color: categoryItem.iconColor
              }}
            />
            <div>{categoryItem.textName}</div>
          </CategoryItem>
        );
      })}
    </Card>
  );
};

export default SideBarCategory;
