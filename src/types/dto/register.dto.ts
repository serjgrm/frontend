export interface RegistrationRequest {
  email: string;
  password: string;
  repeatPassword: string;
  fullName: string;
}

export interface RegistrationResponse {
  id: number;
  email: string;
  fullName: string;
  token: string;
}
