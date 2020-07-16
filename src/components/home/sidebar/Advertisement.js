import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 320px;
    height: 260px;
    margin-bottom: 10px;
    box-sizing: border-box;
    box-shadow: 0 1px 3px #bbb;
    img {
        width: 100%;
        height: 100%;
    }
`;

const Advertisement = props => {
    return (
        <Card>
            <img src={props.imgUrl} alt="advertisement" />
        </Card>
    );
};

export default Advertisement;