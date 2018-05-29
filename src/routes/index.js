
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
// import Main from '../client/main';
// import Home from '../client/home';
// import home from '../client/home';
const Main = Loadable({
    loader: () => import('../client/main'),
    loading,
})
const Home = Loadable({
    loader: () => import('../client/home'),
    loading,
});


const About = Loadable({
    loader: () => import('../client/about'),
    loading,
});

const AboutDetail = Loadable({
    loader: () => import('../client/aboutDetail'),
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
                exact: true
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
    },
    {
        path: '/x',
        component: Home,
    }
]

export default routes;