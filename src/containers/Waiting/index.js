import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import WaitingLayout from '../../layout/WaitingLayout';
import WaitingList from '../../components/home/maincontent/waiting/WaitingList';

const WaitingListNav = styled.div`
  width: 100%;
  padding: 16px 20px;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  a {
    color: #868686;
    text-decoration: none;
    display: block;
    width: 100%;
    padding: 0 12px;
    font-size: 14px;
    box-sizing: border-box;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 16px;
    i {
      vertical-align: bottom;
      margin-right: 4px;
    }
    span {
      color: #444;
    }
  }
  .waitingActiveLink {
    color: #3486f7;
    background: #ebf2fe;
    span {
      color: #3486f7;
    }
  }
`;

const WaitingNav = styled.div`
  height: 32px;
  line-height: 32px;
  margin: 0 10px;
  box-sizing: border-box;
  background: #f6f6f6;
  color: #646464;
  border-radius: 16px;
`;

const Waiting = () => {
  return (
    <WaitingLayout>
      <WaitingListNav>
        <WaitingNav>
          <NavLink
            to="/question/waiting"
            exact
            activeClassName="waitingActiveLink"
          >
            <i className="iconfont icon-show_renqiredu"></i>
            <span>人气问题</span>
          </NavLink>
        </WaitingNav>
        <WaitingNav>
          <NavLink
            to="/question/waiting/potential"
            exact
            activeClassName="waitingActiveLink"
          >
            <i className="iconfont icon-shumiao"></i>
            <span>潜力好问</span>
          </NavLink>
        </WaitingNav>
        <WaitingNav>
          <NavLink
            to="/question/waiting/new"
            exact
            activeClassName="waitingActiveLink"
          >
            <i className="iconfont icon-new"></i>
            <span>新问题</span>
          </NavLink>
        </WaitingNav>
        <WaitingNav>
          <NavLink
            to="/question/waiting/everyone"
            exact
            activeClassName="waitingActiveLink"
          >
            <i className="iconfont icon-solid-person"></i>
            <span>人人答</span>
          </NavLink>
        </WaitingNav>
      </WaitingListNav>
      <Switch>
        <Route path="/question/waiting/:type" component={WaitingList} />
        <Route path="/question/waiting" component={WaitingList} exact />
      </Switch>
    </WaitingLayout>
  );
};

export default Waiting;
