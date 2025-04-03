import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgifComponent } from './ngif/ngif.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClass } from '@angular/common';
import { NgclassComponent } from "./ngclass/ngclass.component";
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { FormComponent } from './form/form.component';
import { SignalComponent } from './signal/signal.component';

@Component({
  selector: 'app-root',
  imports: [ SignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  firstName: string = "Cheten";
  firstName2: string = "";
  rollNo: number = 123;
  isActive: boolean = false;
  currentDate: Date = new Date();
  myPlaceholder: string = "Enter Full Name";
  divClassName: string = "bg-primary";
  selectedCity: string = "";

  constructor(){
    this.isActive = true;
  }

  editClassName(name: string){
    this.divClassName = name;
  }
  showWelcomeMessage(){
    alert("Welcome!");
  }
}