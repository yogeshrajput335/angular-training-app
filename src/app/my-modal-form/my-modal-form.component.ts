import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-modal-form',
  templateUrl: './my-modal-form.component.html',
  styleUrls: ['./my-modal-form.component.scss']
})
export class MyModalFormComponent implements OnInit {
  SavedData:any
  userData={name:'',email:'',website:'',contact:''}
  constructor() { }

  ngOnInit(): void {
  }

  SaveData(){
    this.SavedData = this.userData
  }
  PrefillData(){
    this.userData.name = "Dummy Name";
  }

}
