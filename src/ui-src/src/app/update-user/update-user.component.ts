
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})




export class UpdateUserComponent implements OnInit {

  form: FormGroup;
  updateUser: any;
  roles: any = ['user', 'admin'];


  constructor(private formBuilder: FormBuilder,private router: Router,private data: DataService) {
    this.form = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      username: [''],
      password: [''],
      role: ['user'],
      //color: ['#ff0000'],
      age: [25],
      dob: [new Date()],
      subscribe: [true],

      distance: [50],
      gender: ['male']
    });
  }

  ngOnInit(){
    this.data.currentMessage.subscribe(updateUser => {
      this.updateUser = updateUser;
    }
      );

      this.form.patchValue({
        firstname: [this.updateUser.firstname],
        lastname: [this.updateUser.lastname],
        username: [this.updateUser.username],
        password: [''],
        role: ['user'],
        color: ['#ff0000'],
        age: [25],
        dob: [new Date()],
        distance: [50],
        gender: ['male']
      });
  }

  submit() {
    console.log(this.form.value);
  }

  redirectToUserList(){
    this.router.navigateByUrl('/userList');
  }
}
