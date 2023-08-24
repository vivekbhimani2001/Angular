import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';
import { ToastrService } from 'ngx-toastr';

import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

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
  itemsToDisplay: any[] = [];
  currentPage = 1;
  pageSize = 4; // Set your desired page size here
  totalPages = 0;

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
        this.totalPages = Math.ceil(this.userData.length / this.pageSize);
       this.setPage(1);
      }
    });
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.itemsToDisplay = this.userData.slice(startIndex, endIndex);
    }
  }


  confirmUserDelete(userId: number) {
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.UserDelete(userId);
        Swal.fire(
          'Deleted!',
          'User has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your User is safe :)',
          'error'
        )
      }
    })
    //
      
   
  }

  UserDelete(userId: number) {
    console.log(userId);
    this.userdata.deleteUser(userId).subscribe((result) => {
      console.log("Delete Sucessfully.");
      this.fetchUser();
    })

  }

}
