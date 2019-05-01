import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
var Appservice = /** @class */ (function () {
    function Appservice(http) {
        this.http = http;
    }
    Appservice.prototype.login = function (user) {
        // return this.http.post('http://localhost:9090/dbdemo/login',user);
        return this.http.post('/dbdemo/login', user);
    };
    Appservice.prototype.getUserList = function () {
        return this.http.get('/dbdemo/getUsers');
    };
    Appservice = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], Appservice);
    return Appservice;
}());
export { Appservice };
//# sourceMappingURL=app.services.js.map