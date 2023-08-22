import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  //url = "https://jsonplaceholder.typicode.com/users"
  //url = "http://172.16.0.42:5298/api/PersonalDetails"
  url = "http://192.168.4.157/api/PersonalDetails"
  constructor(private http:HttpClient) { }
  
  getusers(){
    return this.http.get(this.url);
  }

  Adduser(data:any){
    return this.http.post(this.url,data)
  }

  getuserdetail(userId: number){
    const newurl = `${this.url}/${userId}`
    return this.http.get(newurl)
  }

  editUser(userId: number, updatedData: any) {
    const url = `${this.url}/${userId}`;
    return this.http.put(url, updatedData);
  }

  deleteUser(userId: number){
    const newurl = `${this.url}/${userId}`;
    return this.http.delete(newurl)
  }


}
