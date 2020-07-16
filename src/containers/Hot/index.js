import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import HomeLayout from "../../layout/HomeLayout";
import HotList from "../../components/home/maincontent/hot/HotList";

const HotListNav = styled.div`
  width: 100%;
  padding: 16px 20px;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  a {
    color: #646464;
    text-decoration: none;
    display: block;
    width: 72px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    border-radius: 4px;
  }
  .hotActiveLink {
    color: #3486f7;
    background: #ebf2fe;
  }
`;

const HotNav = styled.div`
  width: 72px;
  height: 26px;
  margin: 0 4px;
  background: #f6f6f6;
  color: #646464;
  border-radius: 4px;
`;

const Hot = (props) => {
  return (
    <HomeLayout>
      <HotListNav>
        <HotNav>
          <NavLink to="/hot" exact activeClassName="hotActiveLink">
            全站
          </NavLink>
        </HotNav>
        <HotNav>
          <NavLink to="/hot/zvideo" exact activeClassName="hotActiveLink">
            视频
          </NavLink>
        </HotNav>
        <HotNav>
          <NavLink to="/hot/science" exact activeClassName="hotActiveLink">
            科学
          </NavLink>
        </HotNav>
        <HotNav>
          <NavLink to="/hot/digital" exact activeClassName="hotActiveLink">
            数码
          </NavLink>
        </HotNav>
        <HotNav>
          <NavLink to="/hot/sport" exact activeClassName="hotActiveLink">
            体育
          </NavLink>
        </HotNav>
        <HotNav>
          <NavLink to="/hot/fashion" exact activeClassName="hotActiveLink">
            时尚
          </NavLink>
        </HotNav>
        <HotNav>
          <NavLink to="/hot/film" exact activeClassName="hotActiveLink">
            影视
          </NavLink>
        </HotNav>
      </HotListNav>
      <Switch>
        <Route path="/hot/:list" component={HotList} />
        <Route path="/hot" component={HotList} exact />
      </Switch>
    </HomeLayout>
  );
};

export default Hot;



