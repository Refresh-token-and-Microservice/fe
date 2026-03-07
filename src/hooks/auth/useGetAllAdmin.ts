import { authService } from '@/services/AuthService';
import { TanstackQueryKey } from '@/utils/constant';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useGetAllAdmin = () => {
    const queryClient = useQueryClient();

    const { mutate: mutateGetAllAdmins, ...rest } = useMutation({
        mutationFn: () => authService.getAllAdmin(),

        onSuccess: () => {
            void queryClient.invalidateQueries({
                queryKey: [TanstackQueryKey.ADMINS],
            });
        },

        onError: (error: Error) => {
            console.log('Error', error);
        },
    });

    return { mutateGetAllAdmins, ...rest };
};
