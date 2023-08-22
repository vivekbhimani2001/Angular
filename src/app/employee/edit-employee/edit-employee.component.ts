import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { EmployeeService } from '../service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeId:any;
  employee:any;
  employeeEditForm!:FormGroup

  constructor(private route:ActivatedRoute,private employeeService:EmployeeService,private builder:FormBuilder){
   
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.employeeId = +params['id']}
      )
    console.log(this.employeeId);
    this.fetchEmployee(this.employeeId);

    this.employeeEditForm = this.builder.group({
      PersonName:[''],
      City:[''],
      FilePath:[''],
      FileName:[''],

    })

    
  }

  fetchEmployee(empId:any){
    this.employeeService.GetOneEmployee(empId).subscribe((res) => { this.employee = res })

    this.patchFormValues();
  }

  patchFormValues() {
    if (this.employee) {
      this.employeeEditForm.patchValue({
        PersonName: this.employee.personName,
        City: this.employee.city,
        FileName: this.employee.FileName,
        FilePath: this.employee.FilePath,
      });
    }
  }

  onSubmit(){

  }

}


