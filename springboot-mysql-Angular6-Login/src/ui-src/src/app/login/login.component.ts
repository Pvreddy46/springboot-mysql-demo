import { Component } from '@angular/core';
import { Appservice } from '../services/app.services';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
   /* title = 'eampleTwo';
    loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
*/
credentials = {userName: '', pwd: ''};
    
    constructor(private app: Appservice) {}

    onSubmitLogin(loginForm){
      console.log(loginForm.value.userName);


      if (!loginForm.invalid) {
            this.app.login(this.credentials).subscribe(
                (data:any) => {
                    var user:any;
                    user = data;
                    console.log("Sucsess");
                    //this.router.navigateByUrl('/main');
                    },
                    error => {
                        console.log('error:'+error.error);
                        //this.error = error.error;
                    //this.toasterService.pop('error', '', error);
                }
            );
        }

  }


  }

  


  
