import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Appservice } from '../services/app.services';
var UserListComponent = /** @class */ (function () {
    function UserListComponent(app) {
        this.app = app;
        console.log("After " + this.userData);
    }
    UserListComponent.prototype.getUserList = function () {
        var _this = this;
        this.app.getUserList().subscribe(function (data) {
            console.log(data);
            _this.userData = data;
        });
    };
    UserListComponent.prototype.ngOnInit = function () {
        this.getUserList();
    };
    UserListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user-list',
            templateUrl: './user-list.component.html',
            styleUrls: ['./user-list.component.sass']
        }),
        tslib_1.__metadata("design:paramtypes", [Appservice])
    ], UserListComponent);
    return UserListComponent;
}());
export { UserListComponent };
//# sourceMappingURL=user-list.component.js.map