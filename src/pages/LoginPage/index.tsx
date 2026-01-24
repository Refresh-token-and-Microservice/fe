import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLogin } from '@/hooks/auth/useLogin';
import CenterLayout from '@/layouts/CenterLayout';
import { type LoginDataRequest } from '@/types/AuthType';
import { useState, type FormEvent } from 'react';

const LoginPage = () => {
    const [formData, setFormData] = useState<LoginDataRequest>({
        email: '',
        password: '',
    });

    const { mutate, isPending } = useLogin();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        mutate(formData, {
            onSuccess: () => {
                localStorage.setItem('IS_LOGIN', JSON.stringify(true));
            },
        });
    };

    return (
        <CenterLayout>
            <Card className="max-h-screen min-w-lg">
                <CardHeader>
                    <span className="text-2xl font-bold">Login form</span>
                </CardHeader>
                <CardContent>
                    <form className="w-full flex gap-y-2 flex-col" onSubmit={handleSubmit}>
                        <div className="w-full flex flex-wrap gap-y-2">
                            <Label>Email</Label>
                            <Input
                                type="email"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    });
                                }}
                            />
                        </div>

                        <div className="w-full flex flex-wrap gap-y-2">
                            <Label>Password</Label>
                            <Input
                                type="password"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        password: e.target.value,
                                    });
                                }}
                            />
                        </div>

                        <Button type="submit" className="w-full" disabled={isPending}>
                            {isPending ? 'Logging in...' : 'Login'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </CenterLayout>
    );
};

export default LoginPage;
