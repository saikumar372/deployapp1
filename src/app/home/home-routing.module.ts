import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { MembersDetailViewComponent } from '../members-detail-view/members-detail-view.component';
import { UserListingComponent } from '../user-listing/user-listing.component';
import { LoginPageComponent } from '../login-page/login-page.component';


const routes: Routes = [
  {
    path:'',  
    component:HomeComponent,
    children:[
      {
        path:'',
        redirectTo: 'home'
      },
      {
      path:'home',
      component:HomePageComponent
    },
    {
      path:'register',
      component:RegisterFormComponent
    },
    {
      path:'members',
      component:MembersDetailViewComponent
    },
    {
      path:'login',
      component:LoginPageComponent
    }
    

  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
