import React from 'react';
import config from '../../webpack/config';
const {
    assetsPath,
} = config;
export default ({ bundles, content, chunkAssetsJson }) => {
    var style = [];
    if(chunkAssetsJson && chunkAssetsJson.styles) {
        for(let key in chunkAssetsJson.styles) {
            var href = `${chunkAssetsJson.styles[key]}`
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
                    chunkAssetsJson.javascript.manifest &&<script src={`${chunkAssetsJson.javascript.manifest}`}></script>
                }
                {
                    chunkAssetsJson.javascript.vendors &&<script src={`${chunkAssetsJson.javascript.vendors}`}></script>
                }
                {
                    chunkAssetsJson.javascript.index &&<script src={`${chunkAssetsJson.javascript.index}`}></script>
                }
                {
                    bundles && bundles.map(value => value && <script src={`${assetsPath}/${value.file}`}></script> )
                }
            </body>
        </html>
    )
}