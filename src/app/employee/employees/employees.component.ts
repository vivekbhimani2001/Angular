import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EmployeeService } from '../service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})


export class EmployeesComponent implements OnInit {

  employee:any;
  constructor(private router:Router, private employeService:EmployeeService, private route:ActivatedRoute){
    
  }

ngOnInit(): void {
  
  this.fetchEmployee();
  
 
}

fetchEmployee(){

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
  
  deleteEmployee(id:any){
  this.employeService.DeleteEmployee(id).subscribe((res:any) => { console.log(res);
    this.fetchEmployee();});
 
  }

}


