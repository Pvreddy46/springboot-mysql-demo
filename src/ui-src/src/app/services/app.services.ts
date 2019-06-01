import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';


@Injectable()
export class Appservice {

    constructor(private http: HttpClient) {

    }

    login(user) {
        // return this.http.post('http://localhost:9090/dbdemo/login',user);
        return this.http.post('/dbdemo/login', user);
    }

    getUserList() {
        return this.http.get('/dbdemo/getUsers');
    }

    deleteUser(userName) {
        return this.http.post('/dbdemo/delete', userName);
    }

    updateUserData(userName: any) {
        return this.http.put('/dbdemo/update', userName);
    }

    userRegistration(user){
        return this.http.post('/dbdemo/create',user);
    }
}