import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Appservice } from '../services/app.services';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(app) {
        this.app = app;
        /* title = 'eampleTwo';
         loginForm = new FormGroup({
         userName: new FormControl(''),
         password: new FormControl(''),
     */
        this.credentials = { userName: '', pwd: '' };
    }
    LoginComponent.prototype.onSubmitLogin = function (loginForm) {
        console.log(loginForm.value.userName);
        if (!loginForm.invalid) {
            this.app.login(this.credentials).subscribe(function (data) {
                var user;
                user = data;
                console.log("Sucsess");
                //this.router.navigateByUrl('/main');
            }, function (error) {
                console.log('error:' + error.error);
                //this.error = error.error;
                //this.toasterService.pop('error', '', error);
            });
        }
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'user-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Appservice])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map