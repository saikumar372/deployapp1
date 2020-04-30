import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators,FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-admin-add-event',
  templateUrl: './admin-add-event.component.html',
  styleUrls: ['./admin-add-event.component.css']
})
export class AdminAddEventComponent implements OnInit {

  myform:FormGroup
  submitted = false;  
  id:any
  events_data:any
  is_edit =false;
  eventName: any;
  constructor(private fb: FormBuilder,private router: Router,private _Activatedroute:ActivatedRoute) { 
  }

  ngOnInit(): void {
    let is_logged_in = localStorage.hasOwnProperty('login_data')
    if(!is_logged_in){
      this.router.navigate(['/admin/login'])
    }
    this.myform =this.fb.group({
      'eventName':['',[Validators.required]],
      'city':['',[Validators.required]],
      'distict':['',[Validators.required]],
      'state':['',[Validators.required]],
      'type':['',[Validators.required]],
      'donation_type':['',[Validators.required]],
      'total_expenditure':['',[Validators.required]],
      'total_members':['',[Validators.required]],
      'date':['',[Validators.required]],
      'status':[''],
      'edit_form':['']
      // 'acceptTerms': ['',Validators.required]
    });
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    if(this.id != null){

      this.events_data =JSON.parse(localStorage.getItem('Events'))
      this.events_data=this.events_data[this.id]
      this.is_edit= true;
      this.myform?.controls?.eventName?.setValue('ahashg')      
      this.myform?.patchValue({
        'eventName':this.events_data.eventName,
        'city':this.events_data.city,
        'distict':this.events_data.distict,
        'state':this.events_data.state,
        'type':this.events_data.type,
        'donation_type':this.events_data.donation_type,
        'total_expenditure':this.events_data.total_expenditure,
        'total_members':this.events_data.total_members,
        'date':this.events_data.date,
        'status':this.events_data.status,
        "edit_form":this.id
      })
    }

  }
  onSubmit(){
    
    this.submitted  =true
    if(this.myform.invalid){
      return
    }
    //to store data in local storage
    let is_set_event = localStorage.hasOwnProperty('Events')
    var to_Edit =this.myform.value.edit_form
    if(!to_Edit){
          if(is_set_event){
          
          stored_event_Data = JSON.parse(localStorage.getItem('Events'));

          var new_Data = this.myform.value
          if (!(stored_event_Data instanceof Array)) stored_event_Data = [];
          stored_event_Data.push(new_Data);
        }else{
      var stored_event_Data = new Array();
          stored_event_Data.push(this.myform.value)
        }
        this.insertIntoLocalStorage(stored_event_Data)
        this.router.navigate(['/admin/events'])
      }else{
        stored_event_Data = JSON.parse(localStorage.getItem('Events'));
        delete this.myform.value.edit_form
        stored_event_Data[this.id] =this.myform.value
        this.insertIntoLocalStorage(stored_event_Data)
        this.router.navigate(['/admin/events'])
      }
  
  }
  get f() { return this.myform.controls; }

  insertIntoLocalStorage(arr){
    localStorage.setItem('Events', JSON.stringify(arr));
  }

}
