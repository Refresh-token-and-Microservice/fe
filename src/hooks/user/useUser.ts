import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { userService } from '@/services/UserService';

export const userQueryOptions = (userId: string) =>
    queryOptions({
        queryKey: ['user', userId],
        queryFn: () => userService.getUserById(userId),
    });

export const useUser = (userId: string) => {
    const { data: user, ...rest } = useSuspenseQuery(userQueryOptions(userId));
    return { user, ...rest };
};
