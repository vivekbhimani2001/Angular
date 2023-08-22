import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';
import { ToastrService } from 'ngx-toastr';

import { Injectable } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class UserComponent implements OnInit {

  userData: any[] = [];

  constructor(
    private route: ActivatedRoute, 
    private userdata: UserDataService,
    private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.fetchUser();
  }

  fetchUser() {
    this.userdata.getusers().subscribe((data: any) => {
      if (data.isSuccess && Array.isArray(data.result)) {
        this.userData = data.result;
      }
    });
  }

  confirmUserDelete(userId: number) {
    this.toastr.warning(
      'Are you sure you want to delete this user?', 
      'Confirm Deletion', 
      {
        closeButton: true,
        timeOut: 10000, // Adjust the timeout for user confirmation
        positionClass: 'toast-top-center', // Adjust the position
        tapToDismiss: false // Prevent dismissing by clicking outside
      }
    )
    .onTap // Handle user interaction
    .subscribe((action:any) => {
      if (action) {
        this.UserDelete(userId);
      }
    });
  }

  UserDelete(userId: number) {
    console.log(userId);
    this.userdata.deleteUser(userId).subscribe((result) => {
      console.log("Delete Sucessfully.");
      this.fetchUser();
    })

  }

}
