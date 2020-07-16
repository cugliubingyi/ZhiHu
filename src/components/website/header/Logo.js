import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import logoImg from '../../../statics/logo.jpg';

const LogoImgWrapper = styled.div`
    height: 60px;
    float: left;
`;

const LogoImg = styled.img`
    height: 60px;
`;

const Logo = props => {
    return (
      <LogoImgWrapper>
          <Link to="/">
              <LogoImg src={logoImg} alt="logo" />
          </Link>
      </LogoImgWrapper>
    );  
};

export default Logo;

