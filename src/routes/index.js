import Home from '~/pages/Home';
import Profile from '~/pages/Profile';

const publicRouters = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/profile',
        component: Profile,
    },
];

export { publicRouters };
