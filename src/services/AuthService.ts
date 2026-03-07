import type { GetAllAdminItem, UserProfileResponse } from '@/interfaces/userInterfaces';
import type { LoginDataRequest, RegisterDataRequest } from '@/types/authType';
import type { LoginDataResponse, RegisterDataResponse } from '@/interfaces/authInterfaces';
import { apiGet, apiPost } from '@/utils/apiRequest';

class AuthService {
    async login(loginData: LoginDataRequest): Promise<LoginDataResponse> {
        const { result } = await apiPost<LoginDataResponse>('/auth/login', {
            email: loginData.email,
            password: loginData.password,
        });

        return result;
    }

    async register(registerData: RegisterDataRequest): Promise<RegisterDataResponse> {
        const { result } = await apiPost<RegisterDataResponse>('/auth/register', {
            email: registerData.email,
            password: registerData.password,
        });

        return result;
    }

    async logout(): Promise<string> {
        const { result } = await apiPost<string>('/auth/logout');

        return result;
    }

    async me(): Promise<UserProfileResponse> {
        const { result } = await apiGet<UserProfileResponse>('/auth/me');

        return result;
    }

    async getAllAdmin(): Promise<GetAllAdminItem[]> {
        const { result } = await apiGet<GetAllAdminItem[]>('/auth/admins');

        return result;
    }
}

export const authService = new AuthService();
