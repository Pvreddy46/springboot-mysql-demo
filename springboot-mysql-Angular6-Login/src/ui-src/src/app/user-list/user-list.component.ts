import { Component, OnInit } from '@angular/core';
import { Appservice } from '../services/app.services';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {

    userData: any;
    errorMsg : any;
    errorMsgFlag : any;
    constructor(private app: Appservice, private router: Router) {
        console.log('After ' + this.userData);
    }

    updateUserData(user) {
        //alert('Edit' + userName);

        this.router.navigate(['/register', user]);

        /*  this.app.updateUserData(userName).subscribe(
              (data:any)=>{
                  console.log('User updated sucessfuly');
              }
          );*/
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

    getUserList() {
        this.app.getUserList().subscribe(
            (data: any) => {
                console.log(data);
                this.userData = data;
            },
            (error) => {
                console.log('Error ---->');
                //alert(error.error.message);
               this.errorMsgFlag= error.error.message?true:false;
                this.errorMsg= error.error.message
            }
        );
    }

    ngOnInit() {
        this.getUserList();
    }

}
