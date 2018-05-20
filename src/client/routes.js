
import App from './app';
import Home from './home';
import About from './about';
const routes = [
    {
        component: App,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home,
                loadData: () => 1,
            },
            {
                path: '/child/:id',
                component: About,
                routes: [
                    {
                        path: '/child/:id/grand-child',
                        component: Home
                    }
                ]
            }
        ]
    }
]

export default routes;