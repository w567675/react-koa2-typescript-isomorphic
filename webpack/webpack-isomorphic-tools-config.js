import WebpackIsomorphicToolsPlugin from 'webpack-isomorphic-tools/plugin';
export default {
  assets:
  {
    images:
    {
      extensions: ['png', 'jpg', 'gif', 'ico', 'svg'],
      parser: WebpackIsomorphicToolsPlugin.urlLoaderParser,
    }
  }
}