import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

/*const routes: Routes = [
    {
        path:'home',component:UserListComponent,canActivate:[AuthGuardService]
        
    },
    {path: 'register', component: UserRegistrationComponent},
    {path: 'register/:user', component: UserRegistrationComponent},
    {path: 'login', component: LoginPageComponent},
    {path: '', component: LoginPageComponent}
];
*/


export const routerConfig: Routes = [
    {
        path: 'home',
        component: UserListComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'register',
        component: UserRegistrationComponent
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    { path: '', component: LoginPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routerConfig)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
