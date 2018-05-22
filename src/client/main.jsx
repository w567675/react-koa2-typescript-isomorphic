import React from 'react';
import { renderRoutes } from 'react-router-config';
export default ({route}) => {
    console.log(route)
    return <div>
        <h1>main</h1>
        {renderRoutes(route.routes)}
    </div>
}