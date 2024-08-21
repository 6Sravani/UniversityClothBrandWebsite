import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  insertLoginData(email: string, password: string,name:string) {
    const url = `${this.baseUrl}/login`;
    const data = {email, password,name };
    return this.http.post(url, data);
  }
}
