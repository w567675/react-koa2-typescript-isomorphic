import React from 'react';
import {render} from 'react-dom';
import App from './app';

// import { matchRoutes } from 'react-router-config';
import routes from './routes';
import { matchPath } from 'react-router'

import Router from 'react-router/Router';

// ensure we're using the exact code for default root match
var computeMatch = Router.prototype.computeMatch;


var matchRoutes = function matchRoutes(routes, pathname) {
  var branch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  routes.some(function (route) {
      debugger
    var match = route.path ? matchPath(pathname, route) : branch.length ? branch[branch.length - 1].match // use parent match
    : computeMatch(pathname); // use default "root" match

    if (match) {
      branch.push({ route: route, match: match });

      if (route.routes) {
        matchRoutes(route.routes, pathname, branch);
      }
    }

    return match;
  });

  return branch;
};


const branch = matchRoutes(routes, '/child/23');
console.log(branch);

const match = matchPath('/users/123', {
    path: '/users/:id',
    exact: true,
    strict: false
  })

  console.log(match)

function getComponents(matchComponentsArray) {
    return matchComponentsArray
      .map(matchComponent => matchComponent.route.component)
      .reduce(async (result, component) => {
        if (component.preload) {
          const res = await component.preload();
          const ret = [...(await result), component, ...[].concat(res)];
          return ret;
        }
        debugger
        return [...(await result), component];
      }, []);
  }

  const y = async () => {
    // const result =await getComponents(branch);
    // console.log(result);
    const result  = [1]; 
    return [...(await result), 2, ,3];
  }

  console.log(y());

render(<App />, document.getElementById('root'))

