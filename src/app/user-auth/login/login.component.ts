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

  userForm!: FormGroup;

  constructor(private userLogin: UserService, private router: Router, private formBuilder: FormBuilder, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    if (this.userForm.valid) {
      // console.log(this.userForm.value)
      this.userLogin.UserLogin(this.userForm.value).subscribe(
        {
          next: (data: any) => {

            if (data.isSuccess) {
              this.router.navigate(['auth/Otp-Verify'])
              this.notificationService.showSuccess("Otp Sent Sucessfully In Your Email Id.", "Login-User")
            }
            else {
              this.notificationService.showError("Email Or Password Is Incorrect.","Login-User")
            }
            

          },
          error: error => {
            //this.errorMessage = error.message;
            console.error('There was an error!', error);
          }
        }

      );
    }
  }

}
