import { useEffect, useState } from 'react';
import { createRootRoute, Outlet, useNavigate, useLocation } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { useLogout } from '@/hooks/auth/useLogout';
import { useMe } from '@/hooks/auth/useMe';
import { useUser } from '@/contexts/UserContext';
import { Spinner } from '@/components/ui/spinner';
import { LOGOUT_EVENT_NAME } from '@/utils/constant';
import type { UserProfileResponse } from '@/interfaces/userInterfaces';

export const Route = createRootRoute({
    component: () => <RootLayout />,
});

const RootLayout = () => {
    // 1. Hooks
    const { mutateLogout } = useLogout();
    const { mutateAsync: fetchMeAsync } = useMe();
    const { user, setUser } = useUser();

    const [isInitializing, setIsInitializing] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!isInitializing && user?.id) {
            const hasMissingInfo = !user.firstName || !user.lastName;

            if (hasMissingInfo && location.pathname !== '/infomation-provide') {
                navigate({ to: '/infomation-provide', replace: true });
            }
        }
    }, [user, location.pathname, isInitializing, navigate]);

    useEffect(() => {
        const initApp = async () => {
            try {
                const userData = await fetchMeAsync();

                setUser(userData);
            } catch (error: unknown) {
                console.log('No valid session. Starting as guest.', error);
            } finally {
                setIsInitializing(false);
            }
        };

        initApp();
    }, [fetchMeAsync, setUser]);

    useEffect(() => {
        const handleLogoutEvent = () => {
            mutateLogout();
            setUser({} as UserProfileResponse);
        };

        window.addEventListener(LOGOUT_EVENT_NAME, handleLogoutEvent);

        return () => {
            window.removeEventListener(LOGOUT_EVENT_NAME, handleLogoutEvent);
        };
    }, [mutateLogout, setUser]);

    // 5. Render
    if (isInitializing) {
        return (
            <div className="flex h-screen w-screen items-center justify-center">
                <Spinner />
            </div>
        );
    }

    return (
        <>
            <Outlet />
            <TanStackRouterDevtools />
        </>
    );
};
