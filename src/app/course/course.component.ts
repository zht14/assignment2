import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

interface course{
  id: number;
  name: string;
  instructor: string;
  phone_number: string;
  rate:number;
  enrollPercent:number;
}
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [NgbRatingConfig]

})
export class CourseComponent implements OnInit {
  
  courses = [
    {id:"1", name:"Database Management", instructor:"Ken Liu", phone_number:"412-xxx-xxxx", rate: 4,enrollPercent:70}, 
    {id:"2", name:"Algorithm Design", instructor:"Kalamiri Shein", phone_number:"452-xxx-xxxx", rate:3, enrollPercent:75},
    {id:"3", name:"Intro to Application of Network", instructor:"Sam Klein", phone_number:"414-xxx-xxxx", rate:5, enrollPercent:53},
    {id:"4", name:"Network Performance", instructor:"David Shane", phone_number:"442-xxx-xxxx", rate:4.3, enrollPercent:98},
    {id:"5", name:"Machine Learning", instructor:"Yurko Joseph", phone_number:"412-xxx-xxxx", rate:4.2, enrollPercent:100},
    {id:"6", name:"Cloud Computing", instructor:"Sophia Lancaster", phone_number:"414-xxx-xxxx", rate:3, enrollPercent:30}
  ]

  constructor(config: NgbRatingConfig) {
    config.max = 5;
		config.readonly = true;
    
   }

  ngOnInit(): void {
  }



}
