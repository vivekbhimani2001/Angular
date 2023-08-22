import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-user-details',
  templateUrl: './edit-user-details.component.html',
  styleUrls: ['./edit-user-details.component.css']
})

export class EditUserDetailsComponent implements OnInit {
  userId!: number;
  user:any
  
  editUserDetail!:FormGroup
 

  constructor(private route: ActivatedRoute, private userData: UserDataService, private router:Router,private formBuilder:FormBuilder) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      // Fetch user details based on the user ID and update the form for editing
      this.fetchUserDetailsForEditing(this.userId);
    });

    this.editUserDetail = this.formBuilder.group({
      name:['',Validators.required],
      city:['',Validators.required],
      country:['',Validators.required]
    
    })
  }

 

  fetchUserDetailsForEditing(userId: number) {
    // Implement this method to fetch user details based on the user ID
    this.userData.getuserdetail(userId).subscribe((user:any) => {
      //this.userId = userId;
      this.user = user.result
      console.log(user)

      this.editUserDetail.patchValue({
        name:this.user.name,
        city:this.user.city,
        country:this.user.country
      })
      // Populate the form with the fetched user details for editing
    });
  }

  onSubmit(){
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

