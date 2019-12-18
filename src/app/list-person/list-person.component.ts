import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  arrPeople = [
    {name: 'Nam', age: 24},
    {name: 'Dung', age: 14},
    {name: 'Hoa', age: 21}
  ];

  constructor() { }

  ngOnInit() {
  }

}
