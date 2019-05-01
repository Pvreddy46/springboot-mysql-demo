import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Appservice } from '../services/app.services';
import { Router } from '@angular/router';
var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(app, router) {
        this.app = app;
        this.router = router;
        this.loginForm = new FormGroup({
            userName: new FormControl(''),
            pwd: new FormControl('')
        });
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent.prototype.loginUser = function (userData) {
        var _this = this;
        console.log("Login");
        this.app.login(this.loginForm.value).subscribe(function (data) {
            console.log(data);
            _this.router.navigateByUrl('/home');
        });
    };
    ;
    LoginPageComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login-page',
            templateUrl: './login-page.component.html',
            styleUrls: ['./login-page.component.sass']
        }),
        tslib_1.__metadata("design:paramtypes", [Appservice, Router])
    ], LoginPageComponent);
    return LoginPageComponent;
}());
export { LoginPageComponent };
//# sourceMappingURL=login-page.component.js.map