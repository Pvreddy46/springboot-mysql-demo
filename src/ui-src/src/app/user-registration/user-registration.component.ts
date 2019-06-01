import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Appservice } from '../services/app.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.sass']
})
export class UserRegistrationComponent implements OnInit {

  registerForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    //role: new FormControl(['user']),
    role: this.formBuilder.array(['user']),
    email: new FormControl(''),
    mobile: new FormControl('')
  });

  //data: any;
  userRegStatus: any;

  selectedLevel : any;
  data:Array<Object> = [
      {id: 0, name: 'user'},
      {id: 1, name: 'admin'}
  ];
  roles: any = ['user', 'admin'];

  constructor(private formBuilder: FormBuilder,private app: Appservice, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {

    // this.data = this.activeRoute.snapshot.params;
    // //this.registerForm = this.data;
    // this.registerForm = new FormGroup({
    //     firstName   :   new FormControl(this.data.firstName),
    //     lastName    :   new FormControl(this.data.lastName),
    //     userName    :   new FormControl(this.data.userName),
    //     pwd         :   new FormControl(this.data.pwd),
    //     userRole    :   new FormControl(this.data.userRole),
    //     emailId     :   new FormControl(this.data.emailId),
    //     mobileNum   :   new FormControl(this.data.mobileNum)
    // });
  }

  registerUser(userData) {
    this.app.userRegistration(userData.value).subscribe(
      (data: any) => {
        console.log('User registration successful');
        this.userRegStatus = true;
      }
    )

  }

  redirectToLogin() {
    this.router.navigateByUrl('/login');
  }
  selected(deviceValue){
    console.log(deviceValue);
    this.registerForm.get('role').patchValue('basic');
    this.registerForm.patchValue({role: 'Mahesh'});


  }
}
