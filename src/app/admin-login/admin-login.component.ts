import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';

import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css',
  '../../assets/css/admin-login.css',
  '../../assets/css/util.css'
]
})
export class AdminLoginComponent implements OnInit {

  myform:FormGroup;
  submitted = false;
  
  constructor(private fb:FormBuilder,private router: Router) { }

  ngOnInit(): void {
    let is_logged_in = localStorage.hasOwnProperty('login_data')
    if(is_logged_in){
      this.router.navigate(['/admin/dashboard'])
    }

    this.myform =this.fb.group({
      'username':['',[Validators.required]],
      'password':['',[Validators.required]],
    });
  }
  
  onSubmit(){
    this.submitted = true;
    
    if(this.myform.invalid){
      return;
    }
    //static values
    var admin_user ="admin"
    var admin_pass = "helping@123"
    //
    var form_data = this.myform.value
    var get_user = form_data.username
    var get_pass = form_data.password
    if(get_user != admin_user || get_pass !=admin_pass){
     alert("Login credentails are invalid")
     this.submitted = false;
      this.myform.reset()
    }else{
      var login_data = this.myform.value
      localStorage.setItem('login_data',JSON.stringify(login_data))
      this.router.navigate(['/admin/dashboard'])
    }
  }
  get f() { return this.myform.controls; }

}
