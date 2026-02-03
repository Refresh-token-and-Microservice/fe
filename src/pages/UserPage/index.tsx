import { Link } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { userService } from '@/services/UserService';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CenterLayout from '@/layouts/CenterLayout';

const UserPage = () => {
    const {
        data: users,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['users'],
        queryFn: userService.getUsers,
    });

    if (isLoading)
        return (
            <CenterLayout>
                <div>Loading users...</div>
            </CenterLayout>
        );
    if (error)
        return (
            <CenterLayout>
                <div>Error loading users</div>
            </CenterLayout>
        );

    return (
        <CenterLayout>
            <div className="w-full max-w-2xl flex flex-col gap-4">
                <h1 className="text-3xl font-bold">User List</h1>
                <div className="grid gap-4">
                    {users?.map((user) => (
                        <Link key={user.id} to="/user/$userId" params={{ userId: user.id.toString() }} className="block no-underline">
                            <Card className="hover:bg-accent transition-colors cursor-pointer">
                                <CardHeader>
                                    <CardTitle>{user.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{user.email}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </CenterLayout>
    );
};

export default UserPage;
