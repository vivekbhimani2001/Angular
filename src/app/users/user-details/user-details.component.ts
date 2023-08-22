import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

userDetailForm!:FormGroup;

  constructor(private userData:UserDataService,private router:Router, private formBuilder:FormBuilder){

  }

  userDetails = {
    name:'',
    city:'',
    country:''
  }

  ngOnInit(): void {
    this.userDetailForm = this.formBuilder.group({
      name:['',Validators.required],
      city:['',Validators.required],
      country:['',Validators.required]
    })
  }

  onSubmit(){
    if(this.userDetailForm.valid){
    //console.log(this.userDetailForm.value)
    this.userData.Adduser(this.userDetailForm.value).subscribe((result) => {
      this.router.navigate(['/users/user'])
      });
    }
  }
}
