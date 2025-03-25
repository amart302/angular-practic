import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.scss'
})
export class NgForComponent {
  cityList: string[] = ["Магас", "Назрань", "Карабулак", "Сунжа"];

  employeeArray: any[] = [
    { empId: 120, name: "Muhammad", city: "Pune", contactNo: "13123124124" },
    { empId: 121, name: "Musa", city: "Pusne", contactNo: "312341423435" },
    { empId: 122, name: "Ahmed", city: "Pufne", contactNo: "456576576575" },
    { empId: 123, name: "Arsamak", city: "Punae", contactNo: "53453554545" }
  ]
}
