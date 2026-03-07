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

export interface GetAllAdminItem {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
}

export interface UpdateUserRequest {
    firstName: string;
    lastName: string;
    phone: string;
}
