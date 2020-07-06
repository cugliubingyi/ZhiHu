import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getRecommendList } from '../../redux/reducers/recommends';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecommendList());
    }, [dispatch]);

    return (
        <div>Home</div>
    );
};

export default Home;