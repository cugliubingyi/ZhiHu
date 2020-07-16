import React from "react";

import ExploreTitle from "../ExploreTitle";
import ExploreMoreButton from "../ExploreMoreButton";
import ColumnList from "./ColumnList";

const Column = (props) => {
  return (
    <div>
      <ExploreTitle iconName="icon-bi" titleName="专栏" />
      <ColumnList />
      <ExploreMoreButton viewObject="专栏" />
    </div>
  );
};

export default Column;
