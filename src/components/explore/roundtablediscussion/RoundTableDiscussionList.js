import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import RoundTableDiscussionItem from "./RoundTableDiscussionItem";

const RoundTableDiscussionListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1080px;
  justify-content: space-between;
`;

const RoundTableDiscussionList = (props) => {
  const roundTableDiscussionList = useSelector(
    (state) => state.explores.roundTableDiscussionList
  );

  let outputList = null;

  if (roundTableDiscussionList.length) {
    outputList = roundTableDiscussionList.map((roundTableDiscussionItem) => {
      return (
        <RoundTableDiscussionItem
          key={roundTableDiscussionItem.title}
          roundTableDiscussionItem={roundTableDiscussionItem}
        />
      );
    });
  }

  return <RoundTableDiscussionListWrapper>{outputList}</RoundTableDiscussionListWrapper>;
};

export default RoundTableDiscussionList;
