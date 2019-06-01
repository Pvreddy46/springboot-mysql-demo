import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Appservice } from './app.services';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;

    constructor(private app: Appservice, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;


        if (localStorage.getItem('currentUser')) {
            return true;
        }

        // navigate to login page
        this.router.navigate(['/login']);
        // you can save redirect url so after authing we can move them back to the page they requested
        return false;
    }


}
