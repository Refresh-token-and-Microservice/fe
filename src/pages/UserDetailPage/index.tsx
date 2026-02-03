import { useParams } from '@tanstack/react-router';
import { useUser } from '@/hooks/user/useUser';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import CenterLayout from '@/layouts/CenterLayout';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

const UserDetailPage = () => {
    const { userId } = useParams({ from: '/_auth/user/$userId' });

    const { user } = useUser(userId);

    return (
        <CenterLayout>
            <div className="w-full max-w-2xl flex flex-col gap-4">
                <Button variant="outline" asChild className="w-fit">
                    <Link to="/user">Back to List</Link>
                </Button>
                <Card>
                    <CardHeader>
                        <CardTitle>{user.name}</CardTitle>
                        <CardDescription>@{user.username}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <section>
                            <h3 className="font-semibold text-lg">Contact Information</h3>
                            <p>
                                <strong>Email:</strong> {user.email}
                            </p>
                            <p>
                                <strong>Phone:</strong> {user.phone}
                            </p>
                            <p>
                                <strong>Website:</strong>{' '}
                                <a href={`https://${user.website}`} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                                    {user.website}
                                </a>
                            </p>
                        </section>

                        <section>
                            <h3 className="font-semibold text-lg">Address</h3>
                            <p>
                                {user.address.suite}, {user.address.street}
                            </p>
                            <p>
                                {user.address.city}, {user.address.zipcode}
                            </p>
                        </section>

                        <section>
                            <h3 className="font-semibold text-lg">Company</h3>
                            <p>
                                <strong>Name:</strong> {user.company.name}
                            </p>
                            <p>
                                <strong>Catchphrase:</strong> {user.company.catchPhrase}
                            </p>
                            <p>
                                <strong>BS:</strong> {user.company.bs}
                            </p>
                        </section>
                    </CardContent>
                </Card>
            </div>
        </CenterLayout>
    );
};

export default UserDetailPage;
