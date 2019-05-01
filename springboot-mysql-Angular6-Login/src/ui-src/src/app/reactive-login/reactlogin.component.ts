import { Component } from '@angular/core';
import { Appservice } from '../services/app.services';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-login',
  templateUrl: './reactlogin.component.html',
  styleUrls: ['./reactlogin.component.scss']
})
export class ReactLoginComponent {

     
     credentials = new FormGroup({
        userName: new FormControl(''),
        pwd: new FormControl(''),
     });

     
  
    constructor(private app: Appservice) {}
        onSubmitReactLogin(loginForm) {
            console.log(loginForm.value.userName);


            if (!loginForm.invalid) {
                    this.app.login(this.credentials.value).subscribe(
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

  


  
