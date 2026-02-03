import { Button } from '@/components/ui/button';
import { useLogout } from '@/hooks/auth/useLogout';
import CenterLayout from '@/layouts/CenterLayout';
import { Link } from '@tanstack/react-router';

const HomePage = () => {
    const { mutate: mutateLogout } = useLogout();

    const handleLogout = () => {
        mutateLogout();
    };

    return (
        <CenterLayout>
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">Home page</h1>
                <div className="flex gap-2">
                    <Button onClick={handleLogout}>Logout</Button>
                    <Button asChild variant="outline">
                        <Link to="/user">User List</Link>
                    </Button>
                </div>
            </div>
        </CenterLayout>
    );
};

export default HomePage;
