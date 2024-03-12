export enum TypeOfAccount {
  VOLUNTEER = 'VOLUNTEER',
  SUPPORTER = 'SUPPORTER',
}

export interface RegistrationRequest {
  email: string;
  password: string;
  repeatPassword: string;
  typeOfAccount: TypeOfAccount;
}

export interface RegistrationResponse {
  email: string;
  password: string;
  repeatPassword: string;
  typeOfAccount: TypeOfAccount;
  token: string;
}
