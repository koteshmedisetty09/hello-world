import { Component, OnInit } from '@angular/core';
//import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../alert-service.service';
import { AuthenticationService } from '../authentication-service.service';



//import { AlertService, AuthenticationService } from '../_services';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  formdata;
  constructor(private router: Router) { }
  ngOnInit() {
     this.formdata = new FormGroup({
        uname: new FormControl("", Validators.compose([
           Validators.required,
           Validators.minLength(6)
        ])),
        passwd: new FormControl("", this.passwordvalidation)
     });
  }
  passwordvalidation(formcontrol) {
     if (formcontrol.value.length < 5) {
        return {"passwd" : true};
     }
  }


  onClickAdmin() {
    this.router.navigate(['login']);

  }


  onClickUserSubmit(data) {
     console.log(data.uname);
     if (data.uname == "kotesh" && data.passwd == "kotesh") {
        alert("Login Successful");
        this.router.navigate(['customer'])
     }
  }
} 