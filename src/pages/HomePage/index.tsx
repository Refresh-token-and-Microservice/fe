import { Button } from '@/components/ui/button';
import { useAdmin } from '@/hooks/test/useAdmin';
import { useDemo } from '@/hooks/test/useDemo';
import { useEmployee } from '@/hooks/test/useEmployee';
import { useLogout } from '@/hooks/auth/useLogout';
import CenterLayout from '@/layouts/CenterLayout';
import { useState } from 'react';
import { Link } from '@tanstack/react-router';

const HomePage = () => {
    const { mutate: mutateLogout } = useLogout();
    const { mutate: mutateDemo } = useDemo();
    const { mutate: mutateAdmin } = useAdmin();
    const { mutate: mutateEmployee } = useEmployee();

    const [isLoggedIn] = useState<boolean>(() => {
        return JSON.parse(localStorage.getItem('IS_LOGIN') || 'false');
    });

    const handleLogout = () => {
        mutateLogout();
    };

    const handleDemo = () => {
        mutateDemo();
    };

    const handleAdmin = () => {
        mutateAdmin();
    };

    const handleEmployee = () => {
        mutateEmployee();
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
                    <Button onClick={handleAdmin}>Admin</Button>
                    <Button onClick={handleEmployee}>Employee</Button>
                    <Button asChild>
                        <Link to="/user">User List</Link>
                    </Button>
                </div>
            </div>
        </CenterLayout>
    );
};

export default HomePage;
