import React from 'react';
import { renderRoutes } from 'react-router-config';
export default ({ route }) => {
  return (
    <div>
      <h2>Child</h2>
      {/* child routes won't render without this */}
      {renderRoutes(route.routes)}
    </div>
  )
}