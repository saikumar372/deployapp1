import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-event-listing',
  templateUrl: './admin-event-listing.component.html',
  styleUrls: ['./admin-event-listing.component.css']
})
export class AdminEventListingComponent implements OnInit {

  
  events_data :any
  constructor(private _Activatedroute:ActivatedRoute , private router: Router) { }

  ngOnInit(): void { 
    let is_logged_in = localStorage.hasOwnProperty('login_data')
    if(!is_logged_in){
      this.router.navigate(['/admin/login'])
    }
    this.events_data =JSON.parse(localStorage.getItem('Events'));
  }

}
