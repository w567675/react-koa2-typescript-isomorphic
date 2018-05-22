
import Loadable from 'react-loadable';
import React from 'react';
import Child from './child';
const loading = ({ error, pastDelay, retry }) => {
    if (error) {
        return <div>Error! <button onClick={retry}>Retry</button></div>;
    } else if (pastDelay) {
        return <div>Loading...</div>;
    } else {
        return null;
    }
    return <div>loading</div>
}
const Main = Loadable({
    loader: () => import('./main'),
    loading,
})
const Home = Loadable({
    loader: () => import('./home'),
    loading,
});

// const Child = Loadable({
//     loader: () => import('./child'),
//     loading,
// });

const GrandChild = Loadable({
    loader: () => import('./grandChild'),
    loading,
});

const routes = [
    {
        component: Main,
        routes: [
            {
                path: '/',
                component: Home,
                exact: true,
            },
            {
                path: '/home',
                component: GrandChild,
            },
            {
                path: '/child/:id',
                component: Child,
                routes: [
                    {
                        path: '/child/:id/grand-child',
                        component: GrandChild
                    },
                    {
                        path: '/child/:id/grand-child2',
                        component: Home
                    }
                ]
            },
            // {
            //     path: '/child/:id/grand-child',
            //     component: Child,
            //     routes: [
            //         {
            //             path: '',
            //             component: Home
            //         }
            //     ]
            // }
        ]
    }
]

export default routes;