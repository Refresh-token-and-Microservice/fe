import { useMutation, useQueryClient } from '@tanstack/react-query';
import { userService } from '@/services/UserService';
import { TanstackQueryKey } from '@/utils/constant';
import type { UpdateUserRequest } from '@/interfaces/userInterfaces';

export const useUpdateUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ userId, data }: { userId: number | string; data: UpdateUserRequest }) => {
            return userService.updateUser(userId, data);
        },
        onSuccess: () => {
            void queryClient.invalidateQueries({
                queryKey: [TanstackQueryKey.ME],
            });
        },
    });
};
