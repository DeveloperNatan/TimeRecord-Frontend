import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenJwt } from '../models/token.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:5144/api/auth/authenticator';

  constructor(private http: HttpClient) {}

  Login(email: string, password: string) {
    return this.http.post<TokenJwt>(`${this.apiUrl}/sign-in`, {
      email: email,
      passwordHash: password,
    });
  }
}
