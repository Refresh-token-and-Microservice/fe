import { createContext, use } from 'react';

import type { UserProfileResponse } from '@/interfaces/userInterfaces';

interface UserContext {
    user: UserProfileResponse;
    setUser: (user: UserProfileResponse) => void;
}

export const UserContext = createContext({} as UserContext);

export function useUser(): UserContext {
    const context = use(UserContext);
    return context;
}
