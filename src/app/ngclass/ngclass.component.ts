import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ngclass',
  imports: [NgClass, FormsModule],
  templateUrl: './ngclass.component.html',
  styleUrl: './ngclass.component.scss'
})
export class NgclassComponent {
  divBgColor: string = "bg-primary";
  isChecked: boolean = true;
  divClassName: string = "";

  addDivColor(newClass: string){
    this.divBgColor = newClass;
  }
}
