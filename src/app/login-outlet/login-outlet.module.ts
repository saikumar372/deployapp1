import { NgModule } from '@angular/core';

import { LoginOutletRoutingModule } from './login-outlet-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    LoginOutletRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,    
  ]
})
export class LoginOutletModule { }
