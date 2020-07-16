import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavigationItemWrapper = styled.li`
  float: left;
  line-height: 60px;
  padding: 0 20px;
  a {
    color: #868686;
    text-decoration: none;
    display: inline-block;
    height: 60px;
    box-sizing: border-box;
  }
  a:hover {
    color: #333;
  }
  .active-link1 {
    color: #333;
    font-weight: bold;
    border-bottom: 4px solid #3486f7;
  }
  .active-link2 {
    color: #3486f7;
    font-weight: bold;
  }
`;

const NavigationItem = props => {
    return (
        <NavigationItemWrapper>
            <NavLink
                to={props.path}
                exact={props.exact}
                activeClassName={
                    props.isScrolled ? "active-link2" : "active-link1"
                }
            >
                {props.children}
            </NavLink>
        </NavigationItemWrapper>
    );
};

export default NavigationItem;