import { authService } from '@/services/AuthService';
import { TanstackQueryKey } from '@/utils/constant';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useMe = () => {
    const queryClient = useQueryClient();

    const { mutate: mutateMe, ...rest } = useMutation({
        mutationFn: () => authService.me(),

        onSuccess: () => {
            void queryClient.invalidateQueries({
                queryKey: [TanstackQueryKey.ME],
            });
        },

        onError: (error: Error) => {
            console.log('Error', error);
        },
    });

    return { mutateMe, ...rest };
};
