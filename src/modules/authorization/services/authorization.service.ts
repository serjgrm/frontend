import { LoginRequest, LoginResponse } from "@/types/dto/login.dto";
import { RegistrationRequest, RegistrationResponse } from "@/types/dto/register.dto";
import { URL_TO_BACKEND } from "@config";

const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

export class AuthorizationService {
  static async register(userDto: RegistrationRequest): Promise<RegistrationResponse> {
    const url = URL_TO_BACKEND + '/auth/registration';
    const options = {
      method: 'POST',
      headers: HEADERS,
      credentials: 'include' as RequestCredentials,
      body: JSON.stringify(userDto),
    }
    
    return fetch(url, options).then(res => res.json());
  }
  
  async confirmCode(code: string) {
    const url = URL_TO_BACKEND + '/auth/confirm-code';
    const options = {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(code),
    }
    
    return fetch(url, options).then(res => res.json());
  }
  
  static async login(userDto: LoginRequest): Promise<LoginResponse> {
    const url = URL_TO_BACKEND + '/auth/login';
    const options = {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(userDto),
    }
    
    return fetch(url, options).then(res => res.json());
  }
  
  logout() {}
}
