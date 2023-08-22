import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup;

  constructor(private userRegister: UserService, private formBuilder: FormBuilder){}

  user = {
    name: '',
    username: '',
    password: '',
    role: ''
  };

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      name:['',[Validators.required]],
      username:['',[Validators.required]],
      password:['',[Validators.required]],
      role:['',[Validators.required]]
    })
    
  }

  onSubmit() {

    if(this.registerForm.valid){
      console.log(this.registerForm.value)
      this.userRegister.UserRegister(this.registerForm.value).subscribe((result:any)=>console.log(result))
    }
    // Here you can access the form values in the 'user' object
    //console.log('Submitted User:', this.user);
    

    
    // You can add your registration logic here, like sending data to a server
  }

}
