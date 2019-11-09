import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter = 0;
  name = '';
  fuck = '';
  weight = 0;
  height = 0;

  bmi = this.weight / (this.height);

  constructor() { }

  ngOnInit() {
  }

  countClick() {
    this.clickCounter++;
  }

  setStyle() {
    let myStyle = {
      active: this.clickCounter > 4,
      noActive: this.clickCounter <= 4
    }
    return myStyle;
  }

}
