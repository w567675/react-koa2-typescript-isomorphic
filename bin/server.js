const path = require('path');
const waitForFile = require('./waitForFile');
const config = '';

(async () => {
    try {
        const loadablePath = path.resolve(__dirname, '../dist/react-loadable.json');
        const chunkAssetsPath = path.resolve(__dirname,'../dist/webpack-chunk-assets.json');
        const starterPath = path.resolve(__dirname, '../dist/server.js');
        await waitForFile(loadablePath);
        await waitForFile(chunkAssetsPath);
        await waitForFile(starterPath);
        const additional = {
            loadableJson: require(loadablePath),
            chunkAssetsJson: require(chunkAssetsPath),
        };

        const starter = require(starterPath);



        if (typeof starter === 'function') {
            return starter(additional)
        }

        if (typeof starter.default === 'function') {
            return starter.default(additional)
        }
        throw new Error('Your server source file must export a function.');
    } catch (error) {
        // bright red color
        console.log("\x1b[1m\x1b[31m")

        // Output the error stack trace
        console.error(`\n${error.stack || error}`)

        // reset color and brightness
        console.log('\x1b[39m\x1b[22m')

        // exit with non-zero exit code (indicating that an error happened)
        process.exit(1)
    }



})()

