import { useState } from 'react';
import type { UserProfileResponse } from '@/interfaces/userInterfaces';
import { UserContext } from './UserContext';

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserProfileResponse>({} as UserProfileResponse);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}
