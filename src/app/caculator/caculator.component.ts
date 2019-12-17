import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  number1;
  number2;
  operator;
  result;
  setNumber1(num) {
    this.number1 = parseFloat(num);
  }
  setNumber2(num) {
    this.number2 = parseFloat(num);
  }
  setOperator(operator) {
    this.operator = operator;
  }
  constructor() { }
  onClick() {
    switch (this.operator) {
      case '+':
        this.result = this.number1 + this.number2;
        break;
      case '-':
        this.result = this.number1 - this.number2;
        break;
      case 'x':
        this.result = this.number1 * this.number2;
        break;
      case '/':
        this.result = this.number1 / this.number2;
        break;
      default:
        this.result = this.number1 + this.number2;
        break;
    }
  }
  ngOnInit() {
  }

}
