import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-user-listing',
  templateUrl: './admin-user-listing.component.html',
  styleUrls: ['./admin-user-listing.component.css']
})
export class AdminUserListingComponent implements OnInit {

  user_data :any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    let is_logged_in = localStorage.hasOwnProperty('login_data')
    if(!is_logged_in){
      this.router.navigate(['/admin/login'])
    }

    this.user_data =JSON.parse(localStorage.getItem('user'))
  }

}
