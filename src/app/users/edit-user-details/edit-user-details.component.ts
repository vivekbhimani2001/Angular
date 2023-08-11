import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';


@Component({
  selector: 'app-edit-user-details',
  templateUrl: './edit-user-details.component.html',
  styleUrls: ['./edit-user-details.component.css']
})

export class EditUserDetailsComponent implements OnInit {
  userId!: number;
  user:any

 

  constructor(private route: ActivatedRoute, private userData: UserDataService, private router:Router) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      // Fetch user details based on the user ID and update the form for editing
      this.fetchUserDetailsForEditing(this.userId);
    });
  }

  fetchUserDetailsForEditing(userId: number) {
    // Implement this method to fetch user details based on the user ID
    this.userData.getuserdetail(userId).subscribe((user:any) => {
      //this.userId = userId;
      this.user = user.result
      console.log(user)
      // Populate the form with the fetched user details for editing
    });
  }

  saveEditedUser(){
    console.log(this.user)

    if(this.user){
      this.userData.editUser(this.userId,this.user).subscribe((result) => {
        console.log(result,"Data UpdateSuccessFully..")
        this.router.navigate(['/users/user'])
      })
    }
  }

  // ... (other methods for handling editing and saving)
}

