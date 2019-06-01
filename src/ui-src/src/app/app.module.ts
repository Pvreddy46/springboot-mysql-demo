import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { UserReportComponent } from './user-report/user-report.component';
import { Appservice } from './services/app.services';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserInfoService } from './services/user-info.service';
import { AuthGuard } from './services/auth-guard.service';
import { XhrInterceptor } from './services/app.interceptor';


import { httpInterceptorProviders } from './services/auth/auth-interceptor.service';
import { HttpModule } from '@angular/http';
import { TokenStorageService } from './services/auth/token-storage.service';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { TwofaComponent } from './twofa/twofa.component';
import { BarChartsComponent } from './bar-chart/bar-chart.component';

import { DoughnutChartComponent, PieChartComponent, BarChartComponent } from 'angular-d3-charts';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'; // this is needed!

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSelectModule,
  MatListModule,
  MatSidenavModule,
  MatGridListModule,
  MatCheckboxModule
} from '@angular/material';
import { DataService } from './services/data.service';


const materialModules = [
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSelectModule,
  MatListModule,
  MatSidenavModule,
  MatGridListModule,
  MatCheckboxModule
]




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    UserReportComponent,
    UserListComponent,
    UserRegistrationComponent,
    UpdateUserComponent,
    UserDashboardComponent,
    UserReportComponent,
    TwofaComponent,
    ForgotPasswordComponent,
    BarChartsComponent,
    DoughnutChartComponent,
   PieChartComponent,
   BarChartComponent,
   ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    ...materialModules
  ],
  entryComponents: [
    LoginComponent,
    AdminComponent,
    UserReportComponent,
    UserListComponent,
    UserRegistrationComponent,
    UpdateUserComponent,
    UserDashboardComponent,
    UserReportComponent,
    TwofaComponent,
    BarChartsComponent,
    ForgotPasswordComponent
  ],
  providers: [Appservice,UserInfoService,AuthGuard,httpInterceptorProviders,TokenStorageService,DataService

     //{ provide: TokenStorageService, useClass: TokenStorageService, multi: true }

],
  bootstrap: [AppComponent]
})
export class AppModule { }
