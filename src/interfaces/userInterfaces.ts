export interface UserProfileResponse {
    id: number;
    email: string;
    roles: string[];
    status: string;
    disabled: boolean;
    disableAt: string;
    firstname: string;
    lastname: string;
    phone: string;
}
