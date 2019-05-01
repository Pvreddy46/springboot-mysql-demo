import * as tslib_1 from "tslib";
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
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                LoginComponent,
                ReactLoginComponent,
                LoginPageComponent,
                UserListComponent,
                UserRegistrationComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule
            ],
            providers: [Appservice, AuthGuardService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map