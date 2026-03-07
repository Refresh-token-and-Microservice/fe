import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useUpdateUser } from '@/hooks/user/useUpdateUser';
import { useUser } from '@/contexts/UserContext';
import CenterLayout from '@/layouts/CenterLayout';
import { useNavigate } from '@tanstack/react-router';
import { infoProvideSchema, type InfoProvideFormValues } from '@/schemas/informationProvideFormSchemas';
import { LOGOUT_EVENT_NAME } from '@/utils/constant';

const InformationProvidePage = () => {
    const navigate = useNavigate();
    const { user, setUser } = useUser();

    const { mutate, isPending } = useUpdateUser();

    const form = useForm<InfoProvideFormValues>({
        resolver: zodResolver(infoProvideSchema),
        defaultValues: {
            firstName: user?.firstName || '',
            lastName: user?.lastName || '',
            phone: user?.phone || '',
        },
    });

    const onSubmit = (values: InfoProvideFormValues) => {
        console.log(user);
        if (!user?.id) return;
        mutate(
            { userId: user.id, data: values },
            {
                onSuccess: (updatedUser) => {
                    setUser(updatedUser);
                    navigate({ to: '/' });
                },
            },
        );
    };

    return (
        <CenterLayout>
            <Card className="min-w-lg max-h-screen">
                <CardHeader>
                    <span className="text-2xl font-bold">Provide Information</span>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form className="flex w-full flex-col gap-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="flex w-full flex-col gap-y-2">
                                <Label>Email</Label>
                                <Input type="email" value={user?.email || ''} disabled />
                            </div>

                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your first name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your last name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your phone number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="w-full" disabled={isPending}>
                                {isPending ? 'Saving...' : 'Save Information'}
                            </Button>

                            <Button
                                type="button"
                                onClick={() => {
                                    window.dispatchEvent(new CustomEvent(LOGOUT_EVENT_NAME));
                                }}
                            >
                                Logout and login with another account
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </CenterLayout>
    );
};

export default InformationProvidePage;
