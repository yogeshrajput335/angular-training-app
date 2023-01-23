import { Component, OnInit } from '@angular/core';
import { studentService } from '../services/student.service';

@Component({
  selector: 'app-my-student',
  templateUrl: './my-student.component.html',
  styleUrls: ['./my-student.component.scss']
})
export class MyStudentComponent implements OnInit {
pageData3:any;
  constructor(private ss:studentService) { }

  ngOnInit(): void {
    this.ss.getUserAPI().subscribe(( data:any) =>{
      this.pageData3=data;
    })
  }


}
