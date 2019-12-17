import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  en = 'hello';
  vn = 'xin chào';
  image = 'https://www.stickpng.com/assets/images/5847ea22cef1014c0b5e4833.png';
  logo = 'http://farm8.staticflickr.com/7421/11757818763_c560c2c854_b.jpg';
  forgot = false;

  toggleForgot(){
    this.forgot = !this.forgot;
  }

  constructor() { }

  ngOnInit() {
  }

}
