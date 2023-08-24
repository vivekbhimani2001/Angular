// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Route } from '@angular/router';
// import { EmployeeService } from '../service.service';
// import { FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-edit-employee',
//   templateUrl: './edit-employee.component.html',
//   styleUrls: ['./edit-employee.component.css']
// })
// export class EditEmployeeComponent implements OnInit {

//   employeeId:any;
//   employee:any;
//   employeeEditForm!:FormGroup;
//   filePreview: string | ArrayBuffer | null = null;

//   constructor(private route:ActivatedRoute,private employeeService:EmployeeService,private builder:FormBuilder){
   
//   }

//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       this.employeeId = +params['id']}
//       )
//     console.log(this.employeeId);
//     this.fetchEmployee(this.employeeId);

    

//     this.employeeEditForm = this.builder.group({
//       PersonName:[''],
//       City:[''],
//       UploadedFile: [null]
//     })
//  this.patchFormValues();
   
//   }

//   fetchEmployee(empId:any){
//     this.employeeService.GetOneEmployee(empId).subscribe((res) => { this.employee = res;  
      
      
//   }) 
//   }

//   patchFormValues() {
//     if (this.employee) {
//       this.employeeEditForm.patchValue({
//         PersonName: this.employee.PersonName,
//         City: this.employee.City,
//       });

//       this.filePreview = this.employee.FilePath
//     }
//   }

//   onSubmit(){

//   }

// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification-service.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeId: any;
  employee: any;
  employeeEditForm!: FormGroup;
  filePreview: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private builder: FormBuilder,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.employeeEditForm = this.builder.group({
      PersonName: [''],
      City: [''],
      UploadedFile: [null]
    });


    this.route.params.subscribe(params => {
      this.employeeId = +params['id'];
      this.fetchEmployee(this.employeeId);
    });
  }

  fetchEmployee(empId: any) {
    this.employeeService.GetOneEmployee(empId).subscribe((res) => {
      this.employee = res;
      this.patchFormValues();
    });
  }

  patchFormValues() {
    if (this.employee) {
      this.employeeEditForm.patchValue({
        PersonName: this.employee.personName,
        City: this.employee.city,
      });

      //this.filePreview = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fpainting-mountain-lake-with-mountain-background_188544-9126.jpg%3Fq%3D10%26h%3D200&tbnid=niFX30xK9slyfM&vet=12ahUKEwi32p-gvfKAAxVIq2MGHSp_DUAQMygBegQIARB3..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fhd&docid=TOewjg4vJTbWcM&w=350&h=200&q=images&ved=2ahUKEwi32p-gvfKAAxVIq2MGHSp_DUAQMygBegQIARB3";
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;

    this.previewFile();
  }

  previewFile() {
    if (this.selectedFile) {
      const reader = new FileReader();

      reader.onload = () => {
        this.filePreview = reader.result;
      };

      reader.readAsDataURL(this.selectedFile);
    } else {
      this.filePreview = null;
    }
  }


  onSubmit() {
    // Handle form submission here
    const formData: any = new FormData();
    formData.append('PersonName', this.employeeEditForm.get('PersonName')?.value);
    formData.append('City', this.employeeEditForm.get('City')?.value);
    formData.append('UploadedFile', this.selectedFile as Blob);
    formData.append('Id',this.employeeId)

    console.log(this.employeeEditForm.value);
    console.log(this.selectedFile);

    // Call your service to upload the file and include the formData
   this.employeeService.UpdateEmployee(formData,this.employeeId).subscribe((result:any) => console.log(result));
   this.router.navigate(['employees/employee'])
   this.notificationService.showSuccess("Employee Updated Successfully","Update-Employee")
  }

}


