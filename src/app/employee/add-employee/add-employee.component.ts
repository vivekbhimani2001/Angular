import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  addEmployeeForm!: FormGroup;
  selectedFile: File | null = null;
  filePreview: string | ArrayBuffer | null = null;

  constructor(private formBuilder: FormBuilder, private employeeservice: EmployeeService) {

    this.addEmployeeForm = this.formBuilder.group({
      PersonName: ['', Validators.required],
      City: ['', Validators.required],
      UploadedFile: [null, Validators.required]

    })

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
    if (this.addEmployeeForm.valid) {
      const formData: any = new FormData();
      formData.append('PersonName', this.addEmployeeForm.get('PersonName')?.value);
      formData.append('City', this.addEmployeeForm.get('City')?.value);
      formData.append('UploadedFile', this.selectedFile as Blob);

      // Call your service to upload the file and include the formData
      this.employeeservice.AddEmployee(formData).subscribe((result) => console.log(result));
    } else {
      console.log('Form is not valid.');
    }
  }

}
