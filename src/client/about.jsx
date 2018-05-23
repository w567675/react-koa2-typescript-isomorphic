import React from 'react';
import Head from '../component/head';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import './about.css';
export default (props) => {
    return (
        <div>
            <Head />
            about
            <div className="about">
                <Link to="/about/111/detail">about/:id/detail</Link>
            </div>
            {renderRoutes(props.route.routes)}
        </div>
    )
}