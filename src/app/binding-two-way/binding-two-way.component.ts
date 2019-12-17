import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-two-way',
  templateUrl: './binding-two-way.component.html',
  styleUrls: ['./binding-two-way.component.css']
})
export class BindingTwoWayComponent implements OnInit {

  name ='';
  showEvent(event){
    this.name = event.target.value;
  }

  constructor() { }

  ngOnInit() {
  }

}
