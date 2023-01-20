import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-my-login',
  templateUrl: './my-login.component.html',
  styleUrls: ['./my-login.component.scss']
})
export class MyLoginComponent implements OnInit {
display:any;
form = new FormGroup({
  "Username":new FormControl("",Validators.required),
  "Password":new FormControl("",Validators.required),
});
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.display=this.form.value;
  }
}
