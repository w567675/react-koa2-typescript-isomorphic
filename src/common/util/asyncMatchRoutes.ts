import { matchRoutes, MatchedRoute } from 'react-router-config';

function getComponents(matchComponentsArray:MatchedRoute<{}>[]) {
  return matchComponentsArray
    .map(matchComponent => matchComponent.route.component)
    .reduce(async (result, component) => {
      if (component.preload) {
        const res = await component.preload();
        const ret = [...(await result), component, ...[].concat(res)];
        return ret;
      }
      return [...(await result), component];
    }, []);
}

function getParams(match:MatchedRoute<{}>[]) {
  return match.reduce((result, component) => {
    if (component.match && component.match.params) {
      return { ...result, ...component.match.params };
    }
    return result;
  }, {});
}

export default async (routes:any[], pathname:string) => {
  const match = matchRoutes(routes, pathname);
  const params = getParams(match);
  const components = await getComponents(match);

  return { components, match, params };
};
