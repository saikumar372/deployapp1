import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
  
  
  // { path: '', component: HomePageComponent },
  // { path: 'register', component: RegisterFormComponent },
  // { path: 'members', component: MembersDetailViewComponent },
  // { path: 'user_listing', component: UserListingComponent},
  // { path: 'login', component: LoginPageComponent},
  // { path: 'admin', component: AdminLayoutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
