export interface RegistrationRequest {
  email: string;
  password: string;
  repeatPassword: string;
  fullName: string;
  isVolunteer: boolean;
}

export interface RegistrationResponse {
  id: number;
  email: string;
  fullName: string;
  token: string;
}
