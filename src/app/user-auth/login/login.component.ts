import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  userForm!:FormGroup;

  constructor(private userLogin: UserService, private router: Router, private formBuilder: FormBuilder,private notificationService:NotificationService) {}

 

  ngOnInit(): void {
      this.userForm = this.formBuilder.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.required]]
    })

    
  }

  onSubmit() {
    if(this.userForm.valid){

     // console.log(this.userForm.value)
    this.userLogin.UserLogin(this.userForm.value).subscribe((result: any) => {
      // Save the token
      this.userLogin.SetToken(result.result.token);

      // Redirect to the desired route
      this.router.navigate(['users/user']);
      this.notificationService.showSuccess("User Login Sucessfully","Login-User")
    });
  }
  }

}
