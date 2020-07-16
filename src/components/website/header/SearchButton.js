import React from "react";
import styled from 'styled-components';

const Button = styled.button`
  margin-left: 10px;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  color: #fff;
  background: #3486f7;
  border: 1px solid #3486f7;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`;

const SearchButton = (props) => {
  return <Button>提问</Button>;
};

export default SearchButton;
