import { createFileRoute, redirect } from '@tanstack/react-router';
import HomePage from '../pages/HomePage';

export const Route = createFileRoute('/')({
    beforeLoad: () => {
        const isLoggedIn = JSON.parse(localStorage.getItem('IS_LOGIN') || 'false');
        if (!isLoggedIn) {
            throw redirect({
                to: '/login',
            });
        }
    },
    component: HomePage,
});
