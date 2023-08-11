import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userData: any[] = [];

  constructor(private route: ActivatedRoute, private userdata: UserDataService) { }

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

  UserDelete(userId: number) {
    console.log(userId);
    this.userdata.deleteUser(userId).subscribe((result) => {
      console.log("Delete Sucessfully.");
      this.fetchUser();
    })

  }

}
