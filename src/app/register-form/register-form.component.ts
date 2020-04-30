import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Key } from 'protractor';
import { userInfo } from 'os';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  myform:FormGroup;
  submitted = false;

  constructor(private fb:FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.myform =this.fb.group({
      'firstName':['',[Validators.required,Validators.minLength(6)]],
      'lastName':['',[Validators.required,Validators.minLength(6)]],
      'email':['',[Validators.required,Validators.email]],
      'password':['',[Validators.required,Validators.minLength(6)]],
      'confirmPassword':['',[Validators.required]],
      // 'acceptTerms': ['',Validators.required]
    });
  }
  onSubmit(){
    this.submitted = true;
    if(this.myform.invalid){
      return;
    }
    
    //to store data in local storage
    let is_set_user = localStorage.hasOwnProperty('user')
    
    if(is_set_user){
      
      stored_user_Data = JSON.parse(localStorage.getItem('user'));

      var new_Data = this.myform.value
      if (!(stored_user_Data instanceof Array)) stored_user_Data = [];
      stored_user_Data.push(new_Data);
    }else{
      var stored_user_Data = new Array();
      stored_user_Data.push(this.myform.value)
    }
    localStorage.setItem('user', JSON.stringify(stored_user_Data));

  }
  get f() { return this.myform.controls; }

}
