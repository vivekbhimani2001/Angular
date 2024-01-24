import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { UserAuthRoutingModule } from './user-auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { OtpVerifyComponent } from './otp-verify/otp-verify.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    OtpVerifyComponent
  ],
  imports: [
    CommonModule,
    UserAuthRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserAuthModule { }
