import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EmployeeService } from '../service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})


export class EmployeesComponent implements OnInit {

  employee:any;
  

  constructor(private router:Router, private employeService:EmployeeService){
    
  }

ngOnInit(): void {
  
  this.employeService.GetEmployee().subscribe((res:any)=> {
    if(Array.isArray(res)){
      this.employee = res
    }
  });
 
}
  AddEmployee(){
    this.router.navigate(['employees/addemployee'])
  }
  editEmployee(userId:any){
    this.router.navigate(['employees/editemployee',userId])
  }

}


