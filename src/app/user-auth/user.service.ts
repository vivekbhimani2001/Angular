import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //registerurl = "http://192.168.4.150/api/UserAuth/register"
  url = "http://172.16.1.131/api/UserAuth"
  storeToken:any;
  

  authTokenKey='Auth-Token';

  constructor(private http: HttpClient, private router:Router) { }

  UserRegister(data: any) {
    return this.http.post(this.url +'/register', data)
  }

  UserLogin(data: any) {
    //this.IsAuthenticated = true
    return this.http.post(this.url + '/login', data);
  }

  VerifyOtp(data:any){
    return this.http.post(this.url + '/verifyotp', data)

  }

  SetToken(token: string) {
    this.storeToken = token;
    this.AutoLogout();
    return localStorage.setItem("Auth-Token", token);
  }

  GetToken(): boolean | null{
    
   return localStorage.getItem("Auth-Token") ? true : false;
  }

  AutoLogout() {
    console.log("Token from localStorage:", this.storeToken);

    if (!this.storeToken) {
      console.log("Token not found in localStorage.");
      return;
    }

    try {
      const tokenData = JSON.parse(atob(this.storeToken.split('.')[1]));
      console.log("Parsed Token Data:", tokenData);

      const expirationTime = tokenData.exp * 1000;
      const currentTime = new Date().getTime();
      const timeUntilExpiration = expirationTime - currentTime;
      console.log("Time Until Expiration:", timeUntilExpiration);

      if (timeUntilExpiration > 0) {
        setTimeout(() => {
          localStorage.removeItem("Auth-Token");
          localStorage.clear();
          this.router.navigate(['auth/login']);
        }, timeUntilExpiration);
      }
    } catch (error) {
      console.error("Error parsing or processing token:", error);
    }
  }

  // AutoLogout(){
  //   // setTimeout(() =>{
  //   //   localStorage.removeItem("Auth-Token")
  //   // },5000)
  //   const tokenData = JSON.parse(atob(this.StoredToken.split('.')[1]));
  //     console.log("Parsed Token Data:", tokenData);

  //     const expirationTime = tokenData.exp * 1000;

  //     console.log(expirationTime,"ExpirationT");
  //     const currentTime = new Date().getTime();
  //     const timeUntilExpiration = expirationTime - currentTime;
  //     console.log("Time Until Expiration:", timeUntilExpiration);

  //     if (timeUntilExpiration > 0) {
  //       setTimeout(() => {
  //         localStorage.removeItem("Auth-Token");
  //         localStorage.clear();
  //         this.router.navigate(['login']);
  //       }, timeUntilExpiration);
  //     }
  // }
  
  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.authTokenKey);
  }

}
