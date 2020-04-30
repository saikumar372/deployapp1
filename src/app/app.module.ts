import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MembersDetailViewComponent } from './members-detail-view/members-detail-view.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUserListingComponent } from './admin-user-listing/admin-user-listing.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    MembersDetailViewComponent,
    UserListingComponent,
    LoginPageComponent,
    AdminDashboardComponent,
    AdminUserListingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
