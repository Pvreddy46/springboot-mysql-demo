import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Appservice } from '../services/app.services';
import { FormControl, FormGroup } from '@angular/forms';
var ReactLoginComponent = /** @class */ (function () {
    function ReactLoginComponent(app) {
        this.app = app;
        this.credentials = new FormGroup({
            userName: new FormControl(''),
            pwd: new FormControl(''),
        });
    }
    ReactLoginComponent.prototype.onSubmitReactLogin = function (loginForm) {
        console.log(loginForm.value.userName);
        if (!loginForm.invalid) {
            this.app.login(this.credentials.value).subscribe(function (data) {
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
    ReactLoginComponent = tslib_1.__decorate([
        Component({
            selector: 'form-login',
            templateUrl: './reactlogin.component.html',
            styleUrls: ['./reactlogin.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Appservice])
    ], ReactLoginComponent);
    return ReactLoginComponent;
}());
export { ReactLoginComponent };
//# sourceMappingURL=reactlogin.component.js.map