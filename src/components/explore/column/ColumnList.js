import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import ColumnItem from "./ColumnItem";

const ColumnListWrapper = styled.div`
  display: flex;
  width: 1080px;
  justify-content: space-between;
`;

const ColumnList = (props) => {
  const columnList = useSelector((state) => state.explores.columnList);

  let outputList = null;

  if (columnList.length) {
    outputList = columnList.map((columnItem) => {
      return (
        <ColumnItem
          key={columnItem.title}
          columnItem={columnItem}
        />
      );
    });
  }

  return <ColumnListWrapper>{outputList}</ColumnListWrapper>;
};

export default ColumnList;
