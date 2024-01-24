import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Route, Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification-service.service';

@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.component.html',
  styleUrls: ['./otp-verify.component.css']
})
export class OtpVerifyComponent implements OnInit {

  OtpForm!:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private userlogin:UserService,
    private notificationService:NotificationService,
    private router:Router){}

  ngOnInit(): void {
    this.OtpForm = this.formBuilder.group({
    Otp: ['',[Validators.required]],
  })  
}

onSubmit() {
  if(this.OtpForm.valid){
    console.log(this.OtpForm.value)

    this.userlogin.VerifyOtp(this.OtpForm.value).subscribe(
      {
        next: (data:any) => {
           // console.log(data);
           if(data.isSuccess){
           this.userlogin.SetToken(data.result.token)
           this.router.navigate(['users/user']);
           this.notificationService.showSuccess("Otp Verified Successfully.","Login-User")
           }
           else {
            this.notificationService.showError("Invalid Otp.","Otp Verification")
           }   
        },
        error: error => {
            //this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    }
    )
  }
}
}