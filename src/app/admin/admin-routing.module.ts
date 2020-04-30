import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminAddEventComponent } from '../admin-add-event/admin-add-event.component';


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
    {
      path:'dashboard',
      component:AdminDashboardComponent
    },
    {
      path:'add-event',
      component:AdminAddEventComponent
    },
    {
      path:'add-event/:id',
      component:AdminAddEventComponent
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
