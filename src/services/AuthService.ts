import type { UserProfileResponse } from '@/interfaces/userInterfaces';
import type { LoginDataResponse, LoginDataRequest, RegisterDataRequest, RegisterDataResponse } from '@/types/authType';
import { apiGet, apiPost } from '@/utils/apiRequest';

class AuthService {
    async login(loginData: LoginDataRequest): Promise<LoginDataResponse> {
        console.log(1);
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
}

export const authService = new AuthService();
