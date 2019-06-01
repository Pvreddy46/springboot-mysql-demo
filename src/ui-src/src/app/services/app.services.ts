import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';


@Injectable()
export class Appservice {
    constructor(private http: HttpClient) {

    }

    login(user) {
        // return this.http.post('http://localhost:9090/dbdemo/api/signin',user);
        return this.http.post('dbdemo/api/signin', user);
    }
    validateOTP(otpdata: any) {
      return this.http.post('dbdemo/api/validateOTP', otpdata);
    }
    getUserList() {
        return this.http.get('/dbdemo/getUsers');
    }

    deleteUser(userName) {
        return this.http.post('/dbdemo/delete', userName);
    }

    updateUserData(userName: any) {
        return this.http.post('/dbdemo/update', userName);
    }

    userRegistration(user){
        return this.http.post('dbdemo/api/signup',user);
    }

    updateUserStatus(user) {
        return this.http.post('/dbdemo/statusUpdate',user);
    }

}
