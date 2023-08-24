import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user-auth/user.service';
import { NotificationService } from './services/notification-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
   
  ]
})
export class AppComponent{


  
  constructor(private router: Router, private authService:UserService,private notificationService:NotificationService){}

  get IsLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }
  
  title = 'RoutingApp';

  UserLogout(){
    localStorage.removeItem("Auth-Token");
    this.router.navigate(['auth/login'])
    this.notificationService.showSuccess("User Logout Sucessfully.","User-Logout")
  }
}
