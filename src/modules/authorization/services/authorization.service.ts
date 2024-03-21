import {RegistrationRequest, RegistrationResponse} from "../dto/register.dto.ts";
import {LoginRequest, LoginResponse} from "../dto/login.dto.ts";

export class AuthorizationService {
  async register(userDto: RegistrationRequest): Promise<RegistrationResponse> {}
  
  async confirmCode(code: string) {}
  
  async login(userDto: LoginRequest): Promise<LoginResponse> {}
  
  logout() {}
}
