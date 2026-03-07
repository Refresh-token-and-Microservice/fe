import type { GetAllUserItem, UpdateUserRequest, UserProfileResponse } from '@/interfaces/userInterfaces';
import { apiGet, apiPatch } from '@/utils/apiRequest';

class UserService {
    async updateUser(userId: number | string, data: UpdateUserRequest): Promise<UserProfileResponse> {
        const { result } = await apiPatch<UserProfileResponse>(`/user/${userId.toString()}`, data);

        return result;
    }

    async getAllUser(): Promise<GetAllUserItem[]> {
        const { result } = await apiGet<GetAllUserItem[]>('/user');

        return result;
    }
}

export const userService = new UserService();
