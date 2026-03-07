import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRegister } from '@/hooks/auth/useRegister';
import CenterLayout from '@/layouts/CenterLayout';
import type { RegisterDataRequest } from '@/types/authType';
import { useState, type FormEvent } from 'react';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [error, setError] = useState('');

    const { mutate, isPending } = useRegister();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError('Mật khẩu xác nhận không khớp!');
            return;
        }

        if (formData.password.length < 6) {
            setError('Mật khẩu phải có ít nhất 6 ký tự');
            return;
        }

        setError('');
        console.log('Register Success:', formData);
        mutate(formData as RegisterDataRequest);
    };

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
        if (error) setError('');
    };

    return (
        <CenterLayout>
            <Card className="max-h-screen min-w-lg">
                <CardHeader>
                    <span className="text-2xl font-bold">Register form</span>
                </CardHeader>
                <CardContent>
                    <form className="w-full flex gap-y-2 flex-col" onSubmit={handleSubmit}>
                        <div className="w-full flex flex-wrap gap-y-2">
                            <Label>Email</Label>
                            <Input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => {
                                    handleChange('email', e.target.value);
                                }}
                            />
                        </div>

                        <div className="w-full flex flex-wrap gap-y-2">
                            <Label>Password</Label>
                            <Input
                                type="password"
                                required
                                value={formData.password}
                                onChange={(e) => {
                                    handleChange('password', e.target.value);
                                }}
                            />
                        </div>

                        <div className="w-full flex flex-wrap gap-y-2">
                            <Label>Confirm password</Label>
                            <Input
                                type="password"
                                required
                                value={formData.confirmPassword}
                                onChange={(e) => {
                                    handleChange('confirmPassword', e.target.value);
                                }}
                            />
                        </div>

                        {error && <div className="text-red-500 text-sm font-medium">{error}</div>}

                        <Button type="submit" className="w-full" disabled={isPending}>
                            {isPending ? 'Logging in...' : 'Login'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </CenterLayout>
    );
};

export default RegisterPage;
