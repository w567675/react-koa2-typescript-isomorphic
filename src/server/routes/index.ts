import * as fs from 'fs';
import * as path from 'path';
import * as Router from 'koa-router';
const router = new Router({prefix: '/api'});

fs.readdirSync(__dirname)
    .filter(filename => filename !== path.basename(__filename))
    .forEach(async (filename) => {
        let subRouter = await import(`./${filename}`);
        router.use(subRouter.default.routes(), subRouter.default.allowedMethods())
    });

export default router;

