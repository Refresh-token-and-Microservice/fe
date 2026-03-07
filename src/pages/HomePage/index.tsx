import { Button } from '@/components/ui/button';
import { useLogout } from '@/hooks/auth/useLogout';
import { useAdmin } from '@/hooks/test/useAdmin';
import { useDemo } from '@/hooks/test/useDemo';
import { useEmployee } from '@/hooks/test/useEmployee';
import CenterLayout from '@/layouts/CenterLayout';

const HomePage = () => {
    const { mutateLogout } = useLogout();
    const { mutateAdmin } = useAdmin();
    const { mutateDemo } = useDemo();
    const { mutateEmployee } = useEmployee();

    const handleLogout = () => {
        mutateLogout();
    };

    return (
        <CenterLayout>
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">Home page</h1>
                <div className="flex gap-2">
                    <Button onClick={handleLogout}>Logout</Button>
                    <Button
                        onClick={() => {
                            mutateDemo();
                        }}
                    >
                        Demo
                    </Button>
                    <Button
                        onClick={() => {
                            mutateAdmin();
                        }}
                    >
                        Admin
                    </Button>
                    <Button
                        onClick={() => {
                            mutateEmployee();
                        }}
                    >
                        Employee
                    </Button>
                </div>
            </div>
        </CenterLayout>
    );
};

export default HomePage;
