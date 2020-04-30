import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: 'dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
  { path: 'user',          title: 'User Management',      icon:'nc-single-02',  class: '' },
  { path: 'events',          title: 'Event Management',      icon:'nc-single-copy-04',  class: '' },
];

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  public menuItems: any[];
  constructor() { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
