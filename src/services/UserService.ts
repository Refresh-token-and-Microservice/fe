import type { UpdateUserRequest, UserProfileResponse } from '@/interfaces/userInterfaces';
import { apiPatch } from '@/utils/apiRequest';

class UserService {
    async updateUser(userId: number | string, data: UpdateUserRequest): Promise<UserProfileResponse> {
        const { result } = await apiPatch<UserProfileResponse>(`/user/${userId}`, data);

        return result;
    }
}

export const userService = new UserService();
