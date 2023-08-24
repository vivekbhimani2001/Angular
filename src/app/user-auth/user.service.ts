import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  registerurl = "http://192.168.4.150/api/UserAuth/register"
  loginurl = "http://192.168.4.150/api/UserAuth/login"

  authTokenKey='Auth-Token';

  constructor(private http: HttpClient) { }

  UserRegister(data: any) {
    return this.http.post(this.registerurl, data)
  }

  UserLogin(data: any) {
    //this.IsAuthenticated = true
    return this.http.post(this.loginurl, data);
  }

  SetToken(token: string) {
    return localStorage.setItem("Auth-Token", token);
  }

  GetToken(): string | null{
    return localStorage.getItem("Auth-Token")
  }
  
  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.authTokenKey);
  }

}
