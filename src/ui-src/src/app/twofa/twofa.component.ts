import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Appservice } from '../services/app.services';
import { NavbarService } from '../services/navbar.service';
import { Router } from '@angular/router';
import { UserInfoService } from '../services/user-info.service';
import { TokenStorageService } from '../services/auth/token-storage.service';

@Component({
  selector: 'app-twofa',
  templateUrl: './twofa.component.html',
  styleUrls: ['./twofa.component.css']
})
export class TwofaComponent implements OnInit {

  isLoggedIn = false;
  role = '';
  twoFaForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  errorMsgFlag = false;
  errorMsg: any;


  constructor(private formBuilder: FormBuilder, private app: Appservice, private navbarService: NavbarService,
    private router: Router, private userInfoService: UserInfoService, private tokenStorage: TokenStorageService) {

  }

  ngOnInit() {
    this.twoFaForm = this.formBuilder.group({
      otp: ['', Validators.required]
    });
  }


  validateTwoFa(otpdata) {
    console.log('OTP');
    this.twoFaForm.value.username = this.tokenStorage.getUserName();

    this.app.validateOTP(this.twoFaForm.value).subscribe(
      (data: any) => {
        console.log(data);
        this.userInfoService.storeUserInfo(JSON.stringify(data));
        //this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUserName(data.username);
        this.tokenStorage.saveAuthorities(data.roles[0]);
        this.navbarService.updateNavAfterAuth(data.roles[0].name);
        if (data.roles[0].name === 'ROLE_USER') {
          this.router.navigateByUrl('/user-dashboard');
        } else if (data.roles[0].name === 'ROLE_ADMIN') {
          this.router.navigateByUrl('/admin-dashboard');
        }
        this.navbarService.updateLoginStatus(true);
        //this.router.navigateByUrl('/home');
      },
      (error) => {
        console.log('Error ---->');
        localStorage.clear();
        if (error.status === 504) {
          this.errorMsgFlag = true;
          this.errorMsg = error.statusText;
        } else {
          this.errorMsgFlag = error.error.message ? true : false;
          this.errorMsg = error.error.message;
        }

      });
  };

  redirectToLogin() {
    this.router.navigateByUrl('/login');
  }
}
