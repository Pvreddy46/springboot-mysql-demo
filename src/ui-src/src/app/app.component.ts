import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NavbarService } from './services/navbar.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AuthGuard } from './services/auth-guard.service';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserReportComponent } from './user-report/user-report.component';
import { TokenStorageService } from './services/auth/token-storage.service';
import { TwofaComponent } from './twofa/twofa.component';
import { BarChartsComponent } from './bar-chart/bar-chart.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  links: Array<{ text: string, path: string }>;
  isLoggedIn = false;

  constructor(private router: Router, private navbarService: NavbarService, private tokenStorage: TokenStorageService) {
    this.router.config.unshift(
      { path: 'login', component: LoginComponent },
      { path: 'register', component: UserRegistrationComponent },
      { path: 'twofa', component: TwofaComponent },
      { path: 'forgotpwd', component: ForgotPasswordComponent },

      { path: 'admin-dashboard', component: AdminComponent, canActivate: [AuthGuard] },
      { path: 'userList', component: UserListComponent, canActivate: [AuthGuard] },

      { path: 'user-dashboard', component: BarChartsComponent, canActivate: [AuthGuard] },
      { path: 'updateUser', component: UpdateUserComponent, canActivate: [AuthGuard] },
      { path: 'user-report', component: UserReportComponent, canActivate: [AuthGuard] }
    );
  }

  ngOnInit() {
    this.links = this.navbarService.getLinks();
    this.navbarService.getLoginStatus().subscribe(status => this.isLoggedIn = status);
  }

  logout() {
    this.navbarService.updateLoginStatus(false);
    this.router.navigate(['login']);
    this.tokenStorage.signOut();
  }
}
