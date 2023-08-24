import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification-service.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

userDetailForm!:FormGroup;

  constructor(private userData:UserDataService,private router:Router, private formBuilder:FormBuilder,private notification:NotificationService){

  }

  userDetails = {
    name:'',
    city:'',
    country:'',
  }

  ngOnInit(): void {
    this.userDetailForm = this.formBuilder.group({
      name:['',Validators.required],
      city:['',Validators.required],
      country:['',Validators.required],
    })
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      // If it's a nested FormGroup, call this function recursively
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  

  onSubmit(){
    if(this.userDetailForm.valid){
    //console.log(this.userDetailForm.value)
    this.userData.Adduser(this.userDetailForm.value).subscribe((result) => {
      this.router.navigate(['/users/user']);
      this.notification.showSuccess("User Add Successfully","Add User Componanet")

      });
    }
    else{
      this.markFormGroupTouched(this.userDetailForm)
    }
  }
}


// import { Component, OnInit } from '@angular/core';
// import { UserDataService } from '../../services/user-data.service';
// import { Router } from '@angular/router';
// import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-user-details',
//   templateUrl: './user-details.component.html',
//   styleUrls: ['./user-details.component.css']
// })
// export class UserDetailsComponent{

//   userDetailForm!: FormGroup;
//   selectedcheck:any[] = [];

//   constructor(private fb: FormBuilder) {
//     this.userDetailForm = this.fb.group({
//       selectedValues: this.fb.array([]),
//       //selectedValues:[''],
//       name: ['',Validators.required],
//       city: ['',,Validators.required],
//       country:['',Validators.required],
//     });
//   }

//   get selectedValuesArray() {
//     return this.userDetailForm.get('selectedValues') as FormArray;
//   }

//   onCheckboxChange(event: any) {
 
//     const selectedValues = this.selectedValuesArray.value;
//     const valueToAdd = event.target.value;
//     //console.log(valueToAdd,'valueToAdd');

//     if (event.target.checked) {
//       selectedValues.push(valueToAdd);
//     } else {
//       const index = selectedValues.indexOf(valueToAdd);
//       if (index >= 0) {
//         selectedValues.splice(index, 1);
//       }
//     }

//     this.selectedValuesArray.setValue(selectedValues);
//   }

 

//   onSubmit() {
//     if (this.userDetailForm.valid) {
//       const name = this.userDetailForm.get('name')?.value;
//       const city = this.userDetailForm.get('city')?.value;
//       const country = this.userDetailForm.get('country')?.value
//       const selectedValues = this.selectedValuesArray.value.join(', ');

    

    
//       console.log('Name:', name);
//       console.log('City:', city);
//       console.log('Country:', country);
//       console.log('Selected Values:', selectedValues);
    
//       // Now you can use these values as needed.
//     }
//     else {
//       console.log("Form Not Valids")
    
//     }
//   }
 
//   }


