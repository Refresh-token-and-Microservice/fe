import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { userService } from '@/services/UserService';

export const usersQueryOptions = queryOptions({
    queryKey: ['users'],
    queryFn: userService.getUsers,
});

export const useUsers = () => {
    const { data: users, ...rest } = useSuspenseQuery(usersQueryOptions);
    return { users, ...rest };
};
