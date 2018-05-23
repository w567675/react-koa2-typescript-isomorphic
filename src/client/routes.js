
import Loadable from 'react-loadable';
import React from 'react';
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


const About = Loadable({
    loader: () => import('./about'),
    loading,
});

const AboutDetail = Loadable({
    loader: () => import('./aboutDetail'),
    loading,
});

const routes = [
    {
        component: Main,
        routes: [
            {
                path: '/',
                component: Home,
                loadData: () => 1,
                exact: true,
            },
            {
                path: '/about',
                component: About,
                routes: [
                    {
                        path: '/about/:id/detail',
                        component: AboutDetail
                    }
                ]
            },
        ]
    }
]

export default routes;