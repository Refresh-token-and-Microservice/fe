import { createContext, useContext } from 'react';

import type { UserProfileResponse } from '@/interfaces/userInterfaces';

interface UserContext {
    user: UserProfileResponse;
    setUser: (user: UserProfileResponse) => void;
}

export const UserContext = createContext({} as UserContext);

export function useUser(): UserContext {
    const context = useContext(UserContext);
    if (!context) throw new Error('useUser must be used within a UserProvider.');
    return context;
}
