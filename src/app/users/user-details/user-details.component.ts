import { Component } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  constructor(private userData:UserDataService,private router:Router){

  }

  getUserDetail(data:any){
     console.log(data,"FormData");
     this.userData.Adduser(data).subscribe((result) => {
     console.log(result,"Data Sucessfully Added.")
     this.router.navigate(['/users/user'])
     });
  }

}
