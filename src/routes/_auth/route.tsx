// routes/_auth/route.tsx
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth')({
    beforeLoad: ({ location }) => {
        const isLoggedIn = JSON.parse(localStorage.getItem('IS_LOGIN') || 'false');

        if (!isLoggedIn) {
            throw redirect({
                to: '/login',
                search: {
                    redirect: location.href,
                },
            });
        }
    },
    component: RouteComponent,
});

function RouteComponent() {
    return <Outlet />;
}
