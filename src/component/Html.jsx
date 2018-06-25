import React from 'react';
import config from '../../../webpack/config';
// import webpackChunks from '../../dist/webpack-chunk-assets.json';
const {
    assetsPath,
} = config;
const webpackChunks = {};
console.log(assetsPath)
export default ({ bundles, content, assets }) => {
    var style = [];
    if(webpackChunks && webpackChunks.styles) {
        for(let key in webpackChunks.styles) {
            var href = `${webpackChunks.styles[key]}`
            style.push(
                <link
                    href={href}
                    key={key}
                    media="screen, projection"
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                />
            )
        }
    }

    return (
        <html>
            <head>
                {
                    style
                }
            </head>
            <body>
                <div id="root" dangerouslySetInnerHTML={{__html:content}} />
                {
                    webpackChunks.javascript.manifest &&<script src={`${webpackChunks.javascript.manifest}`}></script>
                }
                {
                    webpackChunks.javascript.vendors &&<script src={`${webpackChunks.javascript.vendors}`}></script>
                }
                {
                    webpackChunks.javascript.index &&<script src={`${webpackChunks.javascript.index}`}></script>
                }
                {
                    bundles && bundles.map(value => value && <script src={`${assetsPath}/${value.file}`}></script> )
                }
            </body>
        </html>
    )
}