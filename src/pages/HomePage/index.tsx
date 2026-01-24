import { Button } from '@/components/ui/button';
import { useDemo } from '@/hooks/auth/useDemo';
import { useLogout } from '@/hooks/auth/useLogout';
import CenterLayout from '@/layouts/CenterLayout';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const { mutate: mutateLogout } = useLogout();
    const { mutate: mutateDemo } = useDemo();

    const [isLoggedIn] = useState<boolean>(() => {
        return JSON.parse(localStorage.getItem('IS_LOGIN') || 'false');
    });

    const handleLogout = () => {
        mutateLogout();
    };

    const handleDemo = () => {
        mutateDemo();
    };

    return (
        <CenterLayout>
            <div className="flex flex-col gap-2">
                <div>Home page</div>
                <div className="flex gap-2">
                    {!isLoggedIn && (
                        <>
                            <Button>
                                <Link to="/login">Login</Link>
                            </Button>

                            <Button>
                                <Link to="/register">Register</Link>
                            </Button>
                        </>
                    )}

                    <Button onClick={handleLogout}>Logout</Button>
                    <Button onClick={handleDemo}>Demo</Button>
                </div>
            </div>
        </CenterLayout>
    );
};

export default HomePage;
