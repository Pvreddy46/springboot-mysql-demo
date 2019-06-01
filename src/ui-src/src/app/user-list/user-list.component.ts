import { Component, OnInit } from '@angular/core';
import { Appservice } from '../services/app.services';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {

  userData: any;
  updateUser: any;
  errorMsg: any;
  errorMsgFlag: any;
  userRole: any;
  isAdmin: boolean;
  req: any;
  statusReq: any;
  constructor(private app: Appservice, private router: Router,private data: DataService) {
    console.log('After ' + this.userData);
  }

  updateUserData(user) {
    //this.router.navigate(['/register', user]);
    console.log(user);
    this.updateUser = user;
    this.data.changeMessage(user);
    this.router.navigateByUrl('/updateUser');
  }

  deleteUser(userName) {
    // alert('Delete' + userName);
    this.app.deleteUser(userName).subscribe(
      (data: any) => {
        console.log('User deleted sucessfuly');
        this.userData = data;
        //this.router.navigateByUrl('/home');
      }
    );
  }

  statusUpdate(userName, code) {
    if (code == 'INACTIVE') {
      this.statusReq = 'ACTIVE';
    } else {
      this.statusReq = 'INACTIVE';
    }

    //status : this.statusReq;
    this.req = {
      userName: userName,
      status: this.statusReq
    };

    this.app.updateUserStatus(this.req).subscribe(
      (data: any) => {
        console.log('User deleted sucessfuly');
        this.userData = data;
        this.data.changeMessage(data);
      }
    );
  }


  getUserList() {
    this.app.getUserList().subscribe(
      (data: any) => {
        console.log(data);
        this.userData = data;
      },
      (error) => {
        console.log('Error ---->');
        //alert(error.error.message);
        this.errorMsgFlag = error.error.message ? true : false;
        this.errorMsg = error.error.message
      }
    );
  }

  ngOnInit() {
    this.getUserList();
  }

}
