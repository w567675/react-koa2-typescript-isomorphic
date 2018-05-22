import React from 'react';
import Head from '../component/head';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

export default ({route}) => {
    return <div>
        <Head />
        home
        <Link to="/child/12/grand-child">/child/12/grand-child</Link>

        {renderRoutes(route.routes)}
    </div>
}