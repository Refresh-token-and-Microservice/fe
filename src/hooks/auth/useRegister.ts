import { authService } from '@/services/AuthService';
import type { RegisterDataRequest } from '@/types/authType';
import { TanstackQueryKey } from '@/utils/constant';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useRegister = () => {
    const queryClient = useQueryClient();

    const { mutate, isPending } = useMutation({
        mutationFn: (registerData: RegisterDataRequest) => authService.register(registerData),

        onSuccess: () => {
            void queryClient.invalidateQueries({
                queryKey: [TanstackQueryKey.REGISTER],
            });
        },

        onError: (error: Error) => {
            console.log(error);
        },
    });

    return { mutate, isPending };
};
