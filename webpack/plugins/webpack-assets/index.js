function WebpackChunk ()  {

}

WebpackChunk.prototype.apply = function (compiler) {
    compiler.plugin('done', function (compilation) {
        try {
            const stats = compilation.toJson();
            console.log(stats.assetsByChunkName);
        } catch (error) {
            console.log(error)
        }
	});
}

export default WebpackChunk;