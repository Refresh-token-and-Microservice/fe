export interface UserProfileResponse {
    id: number;
    email: string;
    roles: string[];
    status: string;
    disabled: boolean;
    disableAt: string;
    firstName: string;
    lastName: string;
    phone: string;
}

export type GetAllAdminItem = UserProfileResponse;

export interface GetAllUserItem {
    userId: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
}

export interface UpdateUserRequest {
    firstName: string;
    lastName: string;
    phone: string;
}
