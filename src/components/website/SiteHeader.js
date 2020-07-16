import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Logo from "./header/Logo";
import NavigationItems from "./header/NavigationItems";
import Search from "./header/Search";

const HeaderWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 60px;
  background: #fff;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
  z-index: 999;
`;

const HeaderContainer = styled.div`
  width: 1080px;
  height: 60px;
  margin: 0 auto;
  overflow: hidden;
  transition: transform 0.5s;
`;

const RightItems = styled.div`
  float: right;
`;

const Information = styled.i`
  float: left;
  line-height: 60px;
  color: #868686;
  font-size: 32px !important;
  padding: 0 20px;
  cursor: pointer;
  &:hover {
    color: #666;
  }
`;

const Message = styled.i`
  float: left;
  line-height: 60px;
  color: #868686;
  font-size: 32px !important;
  padding: 0 20px;
  cursor: pointer;
  &:hover {
    color: #666;
  }
`;

const AvatarWrapper = styled.div`
  float: left;
  padding: 0 20px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;
`;

const Header = (props) => {
  const avatarImgUrl = useSelector((state) => state.user.avatarImgUrl);

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 60) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    if (
      props.match.path === '/' ||
      props.match.path === '/follow' ||
      props.match.path.indexOf('/hot') > -1
    ) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (
        props.match.path === "/" ||
        props.match.path === "/follow" ||
        props.match.path.indexOf("/hot") > -1
      ) {
        window.removeEventListener("scroll", handleScroll);
      }
    }
  }, [props.match.path]);

  return (
    <HeaderWrapper>
      <HeaderContainer
        style={{
          transform: isScrolled ? "translateY(-60px)" : "translateY(0)",
        }}
      >
        <Logo />
        <NavigationItems isScrolled={isScrolled} />
        <Search align="left" />
        <RightItems>
          <Information className="iconfont icon-xiaoxi" />
          <Message className="iconfont icon-xiaoxi1" />
          <AvatarWrapper>
            <Avatar src={avatarImgUrl} alt="avatar" />
          </AvatarWrapper>
        </RightItems>
      </HeaderContainer>
      <HeaderContainer
        style={{
          transform: isScrolled ? "translateY(-60px)" : "translateY(0)",
        }}
      >
        <Logo />
        <NavigationItems isScrolled={isScrolled} />
        <Search align="right" />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default withRouter(Header);
