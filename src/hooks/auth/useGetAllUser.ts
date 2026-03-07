import { userService } from '@/services/UserService';
import { TanstackQueryKey } from '@/utils/constant';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useGetAllUser = () => {
    const queryClient = useQueryClient();

    const { mutate: mutateGetAllUser, ...rest } = useMutation({
        mutationFn: () => userService.getAllUser(),

        onSuccess: () => {
            void queryClient.invalidateQueries({
                queryKey: [TanstackQueryKey.USERS],
            });
        },

        onError: (error: Error) => {
            console.log('Error', error);
        },
    });

    return { mutateGetAllUser, ...rest };
};
