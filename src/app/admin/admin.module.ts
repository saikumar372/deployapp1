import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component"
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminAddEventComponent } from '../admin-add-event/admin-add-event.component';
import { AdminEventListingComponent } from '../admin-event-listing/admin-event-listing.component';


@NgModule({
  declarations: [AdminComponent,AdminSidebarComponent,AdminHeaderComponent,AdminAddEventComponent,AdminEventListingComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
