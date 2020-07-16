import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import HotItem from './HotItem';
import { getHotList } from '../../../../redux/reducers/hots';

const HotList = props => {
    const dispatch = useDispatch();
    let listType = props.match.params.list;

    if (listType === undefined) {
        listType = "total";
    }

    useEffect(() => {
        dispatch(getHotList(listType));
    }, [dispatch, listType]);

    const hotList = useSelector(state => state.hots.hotList);
    
    let outputList = null;

    if (hotList.length) {
        outputList = hotList.map(hotItem => {
            return <HotItem key={hotItem.id} hotItem={hotItem} />;
        })
    }
    return <div>{outputList}</div>
};

export default HotList;