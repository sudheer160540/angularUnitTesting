import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  compute(number){
    if(number<0)
      return 0;

      return number+1;
    
  }
}
