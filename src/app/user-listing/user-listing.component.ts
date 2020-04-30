import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {

  user_data :any;
  constructor() { }

  ngOnInit(): void {
    this.user_data =JSON.parse(localStorage.getItem('user'))
  }

}
