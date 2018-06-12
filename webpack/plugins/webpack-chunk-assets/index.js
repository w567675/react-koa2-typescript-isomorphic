import path from 'path';
import fsExtra from 'fs-extra';

function WebpackChunk (options = {})  {
    this.options = options;
}

WebpackChunk.prototype.apply = function (compiler) {
    const {
        filename = '',
    } = this.options;
    compiler.plugin('done', function (compilation) {
        try {
            const stats = compilation.toJson();
            const outputPath = stats.outputPath;
            const assets = getAssets(stats.assetsByChunkName, stats.publicPath)
            fsExtra.outputFileSync(path.resolve(outputPath, filename ||'./webpack-chunk-assets.json'), JSON.stringify(assets))
        } catch (error) {
            console.log(error)
        }
	});
}


const getAssets = (chunks, publicPath) => {
    const assetsChunks = {
        javascript: { },
        styles: { },
    }
    if(!chunks) {
        return assetsChunks;
    }
    for(let name in chunks) {
        const value = chunks[name];
        if(Array.isArray(value)) {
            value.forEach(value => {
                insertAssets({assetsChunks, publicPath, name, value});
            });
        }
        else {
            insertAssets({assetsChunks, publicPath, name, value});
        }
    }
    return assetsChunks;
}


const isType = (name, extension) => {
    return path.extname(name) === '.' + extension;
}


const insertAssets = ({assetsChunks, publicPath, name, value}) => {
    if(isType(value, 'js')) {
        assetsChunks.javascript[name] = publicPath + value;
    }
    if(isType(value, 'css')) {
        assetsChunks.styles[name] = publicPath + value;
    }
}

export default WebpackChunk;