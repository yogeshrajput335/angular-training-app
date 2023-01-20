import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { loginService } from '../services/login.service';

@Component({
  selector: 'app-my-login',
  templateUrl: './my-login.component.html',
  styleUrls: ['./my-login.component.scss']
})
export class MyLoginComponent implements OnInit {
display:any;
pageData4:any;
form = new FormGroup({
  "Username":new FormControl("",Validators.required),
  "Password":new FormControl("",Validators.required),
  "UserId":new FormControl(),
  "Id":new FormControl(),
  "Title":new FormControl(),
  "Completed":new FormControl(),
});

  constructor(private ls:loginService) { }

  ngOnInit(): void {
    this.ls.getLoginAPI().subscribe(( data:any)=>{
      this.pageData4=data;
    })
  }
  onSubmit(){
    this.display=this.form.value;
  }
}
