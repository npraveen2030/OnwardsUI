import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginRequest {
  employeeCode: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  body: boolean;
  status: number;
  userId: number;
  username: string;
  loginTime: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiService = 'https://localhost:7255/api'; // Base URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<LoginResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const payload: LoginRequest = {
      employeeCode: username,
      password: password
    };

    return this.http.post<LoginResponse>(`${this.apiService}/auth/login`, payload, { headers });
  }
}
