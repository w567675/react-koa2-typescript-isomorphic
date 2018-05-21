
import Loadable from 'react-loadable';


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

const routes = [
    {
        component: Main,
        path: '/',
        exact: true,
        routes: [
            {
                path: '/home',
                component: Home,
                loadData: () => 1,
            },
            {
                path: '/about',
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