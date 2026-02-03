import { useLogout } from '@/hooks/auth/useLogout';
import { useEffect } from 'react';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const LOGOUT_EVENT_NAME = 'app:logout';

export const Route = createRootRoute({
    component: () => <RootLayout />,
});

const RootLayout = () => {
    const { mutate: logout } = useLogout();

    useEffect(() => {
        const handleLogoutEvent = () => {
            logout();
        };

        window.addEventListener(LOGOUT_EVENT_NAME, handleLogoutEvent);

        return () => {
            window.removeEventListener(LOGOUT_EVENT_NAME, handleLogoutEvent);
        };
    }, [logout]);

    return (
        <>
            <Outlet />
            <TanStackRouterDevtools />
        </>
    );
};
