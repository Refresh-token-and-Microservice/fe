import { authService } from '@/services/AuthService';
import type { LoginDataRequest } from '@/types/AuthType';
import { TanstackQueryKey } from '@/utils/constant';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate, isPending } = useMutation({
        mutationFn: (loginData: LoginDataRequest) => authService.login(loginData),

        onSuccess: () => {
            void queryClient.invalidateQueries({
                queryKey: [TanstackQueryKey.LOGIN],
            });

            navigate('/');
        },

        onError: (error: Error) => {
            console.log(error);
        },
    });

    return { mutate, isPending };
};
