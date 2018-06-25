const fs = require('fs');

export default (path) => {
    return new Promise((resolve, reject) => {
        const tickInterval = 300;

        const messageTimer = 0;

        const messageInterVal = 2000;

        tick(
            async () => {
                const exists = await fsExists(path);
                if (!exists) {
                    return false;
                }

                // Check if the file contents have been written to disk
                const contents = fs.readFileSync(path, 'utf8');

                // Check if the file contents is empty
                if (!contents) {
                    return false;
                }

                return true;
            },
            tickInterval,
            resolve,
            () => {
                messageTimer += tickInterval;
                if (messageTimer >= messageInterVal) {
                    messageTimer = 0;
                    console.info(`"${path}" not found`);
                    console.info('waiting for the file to be generated; e.g as a result of a Webpack build');
                }
            }
        )


    });
}

const tick = (checkCondtion, time, done, notDoneYet) => {
    checkCondtion().then((result) => {
        if (result) {
            return done();
        }
        notDoneYet();

        setTimeout(() => tick(checkCondtion, time, done, notDoneYet), time)

    });
}


const fsExists = (path) => {
    return new Promise(resolve => fs.exists(path, exists => resolve(exists)))
}

