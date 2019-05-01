import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Appservice } from '../services/app.services';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

    /*loginForm = new FormGroup({
        userName : new FormControl(''),
        pwd : new FormControl('')
    });
*/

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    errorMsgFlag = false;
    errorMsg : any;


    constructor(private app: Appservice, private router: Router, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            pwd: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    loginUser(userData) {
        console.log("Login");
        this.app.login(this.loginForm.value).subscribe(
            (data: any) => {
                console.log(data);
                localStorage.setItem('currentUser', JSON.stringify(data));
                this.router.navigateByUrl('/home');
            },
            (error) => {
                console.log('Error ---->');
                //alert(error.error.message);
                localStorage.clear();
                this.errorMsgFlag= error.error.message?true:false;
                this.errorMsg= error.error.message
            });
    };

    registerUser() {
        this.router.navigateByUrl('/register');
    }


}
