import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Appservice } from './services/app.services';
import { HttpClientModule } from '@angular/common/http';
import { ReactLoginComponent } from './reactive-login/reactlogin.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserListComponent } from './user-list/user-list.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { NavigationComponent } from './navigation/navigation.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatFormFieldModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReactLoginComponent,
    LoginPageComponent,
    UserListComponent,
    UserRegistrationComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,MatMenuModule
  ],
  providers: [Appservice,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
