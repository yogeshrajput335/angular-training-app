import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  constructor( private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      UserName:['',[Validators.required,Validators.minLength(6)]],
      Email:['',[Validators.required, Validators.email]],
      Password:['',[Validators.required,Validators.minLength(6)]],
    })
  }
get f(){return this.registerForm.controls;}
onSubmit(){
  this.submitted=true;
  if (this.registerForm.invalid) {
    return;
}
}
onReset() {
  
  this.registerForm.reset();
}

}

