// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

// function atLeastOneCheckboxValidator(minRequired = 1): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: any } | null => {
//     const selectedCheckboxes = control.value.filter((isChecked: boolean) => isChecked);
//     return selectedCheckboxes.length >= minRequired ? null : { atLeastOneCheckbox: true };
//   };
// }

// @Component({
//   selector: 'app-product-details',
//   templateUrl: './product-details.component.html',
//   styleUrls: ['./product-details.component.css']
// })
// export class ProductDetailsComponent {

//   form: FormGroup;

//   constructor(private fb: FormBuilder) {
//     this.form = this.fb.group({
//       name: ['', Validators.required],
//       city: ['', Validators.required],
//       checkboxes: this.fb.array([]),
//     });
//   }

//   get checkboxes() {
//     return this.form.get('checkboxes') as FormGroup;
//   }

//   onSubmit() {
//     if (this.form.valid) {
//       const name = this.form.get('name')?.value;
//       const city = this.form.get('city')?.value;
  
//       const selectedCheckboxes = this.form.value.checkboxes
//         .map((isChecked:any, index:any) => isChecked ? `Checkbox ${index + 1}` : null)
//         .filter(Boolean)
//         .join(', ');
  
//       const result = `Name: ${name}, City: ${city}, Selected Checkboxes: ${selectedCheckboxes}`;
  
//       // You can now use 'result' as needed, e.g., send it to an API or display it.
//       console.log(result);
//     }
//   }


// }



//import { Component } from '@angular/core';
//import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, FormArray,FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
// function atLeastOneCheckboxValidator(minRequired = 1): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: any } | null => {
//     const selectedCheckboxes = (control as FormArray).controls.filter((isChecked: AbstractControl) => isChecked.value);
//     return selectedCheckboxes.length >= minRequired ? null : { atLeastOneCheckbox: true };
//   };
// }

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  // form: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.form = this.fb.group({
  //     name: ['', Validators.required],
  //     city: ['', Validators.required],
  //     checkboxes: this.fb.array([
  //       new FormControl(false),
  //       new FormControl(false),
  //       new FormControl(false)
  //     ], atLeastOneCheckboxValidator(1)), // Use the validator here
  //   });
  // }

  // get checkboxesArray() {
  //   return this.form.controls['checkboxes'] as FormArray; // Correct the name here
  // }

  // onSubmit() {
  //   if (this.form.valid) {
  //     const name = this.form.get('name')?.value;
  //     const city = this.form.get('city')?.value;

  //     const selectedCheckboxes = this.checkboxesArray.controls
  //       .map((control:any, index:any) => control.value ? `Checkbox ${index + 1}` : null)
  //       .filter(Boolean)
  //       .join(', ');

  //     const result = `Name: ${name}, City: ${city}, Selected Checkboxes: ${selectedCheckboxes}`;

  //     // You can now use 'result' as needed, e.g., send it to an API or display it.
  //     console.log(result);
  //   }
  // }

  name = 'Angular';
   
  form: FormGroup;
  webData = [
    { id: 1, name: 'PHP' },
    { id: 2, name: 'Laravel' },
    { id: 3, name: 'Angular' },
    { id: 4, name: 'React' }
  ];
  
  get ordersFormArray() {
    console.log(this.form.controls['orders'])
    return this.form.controls['orders'] as FormArray;
    
  }
  
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      city:['',Validators.required],
      orders: new FormArray([], this.atLeastOneCheckboxCheckedValidator()),
    });
  
    this.addCheckboxesToForm();
  }
  
  private addCheckboxesToForm() {
    this.webData.forEach(() => this.ordersFormArray.push(new FormControl(false)));
  }
  
  submit() {
    const selectedOrderIds = this.form.value.orders
      .map((checked:any, i:any) => checked ? this.webData[i].name : null)
      .filter((v: null) => v !== null);
      console.log(this.form.value.city);
    console.log(selectedOrderIds.join(', '));
  }

  // Custom validator function
 atLeastOneCheckboxCheckedValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const formArray = control as FormArray;
    const isChecked = formArray.controls.some(control => control.value === true);

    return isChecked ? null : { noCheckboxChecked: true };
  };
}

}


