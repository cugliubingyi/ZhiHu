import React from "react";
import styled from "styled-components";

import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

const SearchWrapper = styled.div`
  height: 40px;
  margin-top: 10px;
  margin-left: 20px;
`;

const Search = (props) => {
  return (
    <SearchWrapper
      style={{
        float: props.align
      }}
    >
      <SearchInput />
      <SearchButton />
    </SearchWrapper>
  );
};

export default Search;
