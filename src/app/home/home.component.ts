import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  clickCounter = 0;
  name = '';
  weight = 0;
  height = 0;
  condition = '';
  bmi = 0;

  constructor() { }

  ngOnInit() {
  }

  countClick() {
    this.clickCounter++;
  }

  determinateBmi() {
    this.bmi =  this.weight / (this.height * this.height);
  }

  determinateBmiLevel() {
    this.determinateBmi();
    if (this.bmi <= 18) {
      this.condition = 'Light weight!';
    } else if (18 < this.bmi && this.bmi <= 25) {
      this.condition = 'Normal weight';
    } else if (25 < this.bmi && this.bmi <= 30) {
      this.condition = 'Overweight';
    } else if (30 < this.bmi && this.bmi <= 35) {
      this.condition = 'Obesity level 1';
    } else if (35 < this.bmi && this.bmi <= 40) {
      this.condition = 'Obesity level 2';
    } else if (this.bmi > 40) {
      this.condition = 'Obesity level 3';
    } else {
      this.condition = 'Try another values';
    }
  }

  setStyle() {
    const myStyle = {
      active: this.clickCounter > 4,
      noActive: this.clickCounter <= 4
    };
    return myStyle;
  }

}
