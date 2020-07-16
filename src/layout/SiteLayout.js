import React from 'react';

import Header from '../components/website/SiteHeader';

const SiteLayout = props => (
    <>
        <Header />
        {props.children}
    </>
);

export default SiteLayout;