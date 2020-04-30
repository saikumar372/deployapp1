import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'login'
  },{
  path:'',
  component:AdminComponent,
  children:[
    {
      path:'',
      redirectTo: 'login'
    },
    
    
]},
{
  path:'login',
  loadChildren: () => import('../login-outlet/login-outlet.module').then(m => m.LoginOutletModule)
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
