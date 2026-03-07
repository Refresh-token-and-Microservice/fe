import { useUser } from '@/contexts/UserContext';
import { authService } from '@/services/AuthService';
import type { LoginDataRequest } from '@/types/authType';
import { TanstackQueryKey } from '@/utils/constant';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

export const useLogin = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { setUser } = useUser();

    const { mutate, isPending } = useMutation({
        mutationFn: (loginData: LoginDataRequest) => authService.login(loginData),

        onSuccess: (data) => {
            void queryClient.invalidateQueries({
                queryKey: [TanstackQueryKey.LOGIN],
            });
            void queryClient.invalidateQueries({
                queryKey: [TanstackQueryKey.ME],
            });

            setUser(data);

            if (!data.firstName || !data.lastName) {
                navigate({ to: '/infomation-provide' });
            } else {
                navigate({ to: '/' });
            }
        },

        onError: (error: Error) => {
            console.log(error);
        },
    });

    return { mutate, isPending };
};
