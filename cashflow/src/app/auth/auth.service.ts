import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private baseUrl = 'http://127.0.0.1:8080'; // Update with your API base URL

  constructor(private http: HttpClient) {}

  signup(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/`, user);
  }

  login(loginData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/login`, loginData);
  }

}
