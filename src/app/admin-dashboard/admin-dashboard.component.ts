import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css',
  '../../assets/css/paper-dashboard.css'
]
})
export class AdminDashboardComponent implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit(): void {
    let is_logged_in = localStorage.hasOwnProperty('login_data')
    if(!is_logged_in){
      this.router.navigate(['/admin/login'])
    }
    // var user_data =   JSON.parse(localStorage.getItem('user')) ;
    // this.user_count = (user_data == null)? 0 :user_data.length
    // var event_data =   JSON.parse(localStorage.getItem('Events')) ;
    // this.evnts_count = (event_data == null)? 0 :event_data.length
  }

}
