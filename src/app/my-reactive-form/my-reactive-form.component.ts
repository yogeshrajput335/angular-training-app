import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-reactive-form',
  templateUrl: './my-reactive-form.component.html',
  styleUrls: ['./my-reactive-form.component.scss']
})
export class MyReactiveFormComponent implements OnInit {
 display:any
  form = new FormGroup({
    "name": new FormControl("", Validators.required),
    "email": new FormControl("", Validators.required),
    "website": new FormControl("", Validators.required),
    "contact": new FormControl("", Validators.required),
  });
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.display = this.form.value;
  }

}
