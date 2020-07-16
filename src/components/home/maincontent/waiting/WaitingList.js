import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import WaitingItem from "./WaitingItem";
import { getWaitingList } from "../../../../redux/reducers/waitings";

const WaitingListWrapper = styled.div`
  padding: 0 20px;
`;

const WaitingList = (props) => {
  const dispatch = useDispatch();
  let listType = props.match.params.type;

  if (listType === undefined) {
    listType = "hot";
  }

  useEffect(() => {
    dispatch(getWaitingList(listType));
  }, [dispatch, listType]);

  const waitingList = useSelector((state) => state.waitings.waitingList);

  let outputList = null;

  if (waitingList.length) {
    outputList = waitingList.map((waitingItem) => {
      return <WaitingItem key={waitingItem.id} waitingItem={waitingItem} />;
    });
  }
  return <WaitingListWrapper>{outputList}</WaitingListWrapper>;
};

export default WaitingList;
