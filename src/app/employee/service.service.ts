import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url="http://172.16.1.131/api/File"

  constructor(private http: HttpClient) { }

  AddEmployee(data: any) {
    return this.http.post(this.url, data)
  }

  GetEmployee(){
    return this.http.get(this.url)
  }

  GetOneEmployee(empId:any){
    return this.http.get(this.url + `/${empId}`)
  }

  UpdateEmployee(data:any,id:any){
    return this.http.put(this.url + `?id=${id}`,data)
  }
  DeleteEmployee(id:any){
    return this.http.delete(this.url + `/${id}`, id)
  }

 

}