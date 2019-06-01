import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginPageComponent } from './login-page/login-page.component';
var routes = [
    {
        path: 'home', component: UserListComponent, canActivate: [AuthGuardService]
    },
    { path: 'login', component: LoginPageComponent },
    { path: '', component: LoginPageComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map