import React from 'react';
import { renderRoutes } from 'react-router-config';
export default ({ route }) => {
    return <div>
        main
        {renderRoutes(route.routes)}
    </div>
}