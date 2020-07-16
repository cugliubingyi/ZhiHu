import React from "react";
import styled from "styled-components";
import NavigationItem from "./NavigationItem";

const NavigationItemsWrapper = styled.ul`
  float: left;
`;

const NavigationItems = (props) => {
  if (props.isScrolled) {
    return (
      <NavigationItemsWrapper>
        <NavigationItem
          path="/"
          exact
          isScrolled={props.isScrolled}
        >
          推荐
        </NavigationItem>
        <NavigationItem
          path="/follow"
          isScrolled={props.isScrolled}
        >
          关注
        </NavigationItem>
        <NavigationItem
          path="/hot"
          isScrolled={props.isScrolled}
        >
          热榜
        </NavigationItem>
      </NavigationItemsWrapper>
    );
  } else {
    return (
      <NavigationItemsWrapper>
        <NavigationItem
          path="/"
          exact
          isScrolled={props.isScrolled}
        >
          首页
        </NavigationItem>
        <NavigationItem
          path="/explore"
          isScrolled={props.isScrolled}
        >
          发现
        </NavigationItem>
        <NavigationItem
          path="/question/waiting"
          isScrolled={props.isScrolled}
        >
          等你来答
        </NavigationItem>
      </NavigationItemsWrapper>
    );
  }
};

export default NavigationItems;
