import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import SiteLayout from "./SiteLayout";
import NewGlobalWrite from "../components/home/sidebar/NewGlobalWrite";
import CreatorEntrance from "../components/home/sidebar/CreatorEntrance";
import Advertisement from "../components/home/sidebar/Advertisement";
import SideBarCategory from "../components/home/sidebar/SideBarCategory";
import SideBarNavList from "../components/home/sidebar/SideBarNavList";
import NavigationItems from "../components/website/header/NavigationItems";
import { getUserInfo } from "../redux/reducers/user";

const HomeWrapper = styled.div`
  margin-top: 60px;
  background: #f6f6f6;
`;

const HomeContainer = styled.div`
  width: 1080px;
  margin: 0 auto;
  padding-top: 10px;
  display: flex;
`;

const MainContent = styled.div`
  width: 750px;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 1px 3px #bbb;
`;

const SideBar = styled.div`
  width: 320px;
  box-sizing: border-box;
  margin-left: 10px;
`;

const NavigationWrapper = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #f6f6f6;
`;

const HomeLayout = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  return (
    <SiteLayout>
      <HomeWrapper>
        <HomeContainer>
          <MainContent>
            <NavigationWrapper>
              <NavigationItems isScrolled />
            </NavigationWrapper>
            {props.children}
          </MainContent>
          <SideBar>
            <NewGlobalWrite />
            <CreatorEntrance />
            <SideBarCategory />
            <Advertisement imgUrl="https://pic1.zhimg.com/v2-d1fec6352ed4873abb0818d001bca248_540x450.jpeg" />
            <SideBarNavList />
            <Advertisement imgUrl="https://pic4.zhimg.com/v2-10b5e9803b66cfe4d19e9f6bee83be8f_540x450.jpeg" />
          </SideBar>
        </HomeContainer>
      </HomeWrapper>
    </SiteLayout>
  );
};

export default HomeLayout;
