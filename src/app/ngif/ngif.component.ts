import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngif',
  imports: [NgIf, FormsModule],
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.scss'
})
export class NgifComponent {
  div1Visable: boolean = false;
  number1: string = "";
  number2: string = "";

  showDiv1(){
    this.div1Visable = true;
  }
  hideDiv1(){
    this.div1Visable = false;
  }
  showAndHideDiv1(){
    this.div1Visable = !this.div1Visable;
  }
}
