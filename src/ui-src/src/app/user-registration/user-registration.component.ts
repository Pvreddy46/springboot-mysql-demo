import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Appservice } from '../services/app.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-user-registration',
    templateUrl: './user-registration.component.html',
    styleUrls: ['./user-registration.component.sass']
})
export class UserRegistrationComponent implements OnInit {

    registerForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        userName: new FormControl(''),
        pwd: new FormControl(''),
        userRole:new FormControl(''),
        emailId:new FormControl(''),
        mobileNum:new FormControl('')
    });

    data: any;
    userRegStatus : any;

    constructor(private app: Appservice,private router:Router, private activeRoute: ActivatedRoute) { }

    ngOnInit() {
        this.data = this.activeRoute.snapshot.params;
        //this.registerForm = this.data;
        this.registerForm = new FormGroup({
            firstName   :   new FormControl(this.data.firstName),
            lastName    :   new FormControl(this.data.lastName),
            userName    :   new FormControl(this.data.userName),
            pwd         :   new FormControl(this.data.pwd),
            userRole    :   new FormControl(this.data.userRole),
            emailId     :   new FormControl(this.data.emailId),
            mobileNum   :   new FormControl(this.data.mobileNum)
        });
    }

    registerUser(userData) {
        this.app.userRegistration(userData.value).subscribe(
            (data: any) => {
                console.log('User registration successful');
                this.userRegStatus = true;
            }
        )

    }

    redirectToLogin(){
        this.router.navigateByUrl('/login');
    }

}
