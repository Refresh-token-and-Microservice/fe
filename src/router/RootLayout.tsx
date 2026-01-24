import { useLogout } from '@/hooks/auth/useLogout';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export const LOGOUT_EVENT_NAME = 'app:logout';

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
        </>
    );
};

export default RootLayout;
