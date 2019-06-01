import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Appservice } from '../services/app.services';
import { Router } from '@angular/router';
import { UserInfoService } from '../services/user-info.service';
import { TokenStorageService } from '../services/auth/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;
  role = '';
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  errorMsgFlag = false;
  errorMsg: any;

  constructor(private app: Appservice, private navbarService: NavbarService, private formBuilder: FormBuilder,
    private router: Router, private userInfoService: UserInfoService, private tokenStorage: TokenStorageService, ) {
    //this.navbarService.getLoginStatus().subscribe(status => this.isLoggedIn = status);
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }



  loginUser(userData) {
    console.log('Login');
    this.app.login(this.loginForm.value).subscribe(
      (data: any) => {
        console.log(data);
        //this.userInfoService.storeUserInfo(JSON.stringify(data));

        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUserName(data.username);
        //this.tokenStorage.saveAuthorities(data.authorities);
        //this.navbarService.updateNavAfterAuth(data.authorities[0].authority);
        // if(data.authorities[0].authority=='ROLE_USER'){
        //   this.router.navigateByUrl('/user-dashboard');
        // }else if(data.authorities[0].authority=='ROLE_ADMIN'){
        //   this.router.navigateByUrl('/admin-dashboard');
        // }
        //this.navbarService.updateLoginStatus(true);
        //this.router.navigateByUrl('/home');

        this.router.navigateByUrl('/twofa');
      },
      (error) => {
        console.log('Error ---->');
        //alert(error.error.message);
        localStorage.clear();
        if (error.status == 504) {
          this.errorMsgFlag = true;
          this.errorMsg = error.statusText
        } else {
          this.errorMsgFlag = error.error.message ? true : false;
          this.errorMsg = error.error.message
        }

      });
  };

  redirectToForgotPwd() {
    this.router.navigateByUrl('/forgotpwd');
  }
}
