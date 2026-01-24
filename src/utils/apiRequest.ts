import instance from '@/config/axios';
import { type AxiosRequestConfig } from 'axios';

async function apiRequest<T>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await instance.request<ApiResponse<T>>(config);
    return response.data;
}

export function apiGet<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return apiRequest<T>({ ...(config ?? {}), method: 'GET', url });
}

export function apiPost<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return apiRequest<T>({ ...(config ?? {}), method: 'POST', url, data });
}

export function apiPut<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return apiRequest<T>({ ...(config ?? {}), method: 'PUT', url, data });
}

export function apiPatch<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return apiRequest<T>({ ...(config ?? {}), method: 'PATCH', url, data });
}

export function apiDelete<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return apiRequest<T>({ ...(config ?? {}), method: 'DELETE', url, data });
}
