import Auth from '~/components/Auth';
import Profile from '~/components/Profile';
import Sidebar from '~/components/layouts/DefaultLayout/Sidebar';

export const publicRoutes = [
    { path: '/', component: Auth, layout: null },
    { path: '/chatroom', component: Sidebar },
    { path: '/chatroom/:id', component: Sidebar },
    { path: '/groups', component: Sidebar },
    { path: '/profile', component: Profile },
];
