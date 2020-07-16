import React from "react";
import styled from "styled-components";

const SearchInputWrapper = styled.div`
  position: relative;
  float: left;
  width: 320px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background: #f7f7f7;
`;

const Input = styled.input`
  border: none;
  outline: none;
  margin-top: 4px;
  padding-left: 10px;
  background: #f7f7f7;
  width: 280px;
  height: 32px;
  line-height: 32px;
`;

const SearchIcon = styled.i`
  position: absolute;
  right: 10px;
  top: 10px;
  font-weight: bold;
  font-size: 20px !important;
  color: #868686;
  cursor: pointer;
`;

const SearchInput = (props) => {
  return (
    <SearchInputWrapper>
      <Input type="text" placeholder="贵州公交坠湖" />
      <SearchIcon className="iconfont icon-fangdajing" />
    </SearchInputWrapper>
  );
};

export default SearchInput;
