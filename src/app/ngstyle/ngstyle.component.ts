import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngstyle',
  imports: [NgStyle, FormsModule],
  templateUrl: './ngstyle.component.html',
  styleUrl: './ngstyle.component.scss'
})
export class NgstyleComponent {
  divBackColor: string = '';
  isChecked: boolean = false;
  myCss: any = {
    "background-color": "aqua",
    "width": "200px",
    "height": "200px"
  }

  changeColorDiv(color: string){
    this.divBackColor = color
  }
}
