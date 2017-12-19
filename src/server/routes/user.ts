import * as Router from 'koa-router';
const router = new Router({prefix: '/user'});

router.get('/getUserInfo', async (ctx) => {
    ctx.body = {
        name: 'xxxx',
    }
})
console.log(router.allowedMethods)
export default router;