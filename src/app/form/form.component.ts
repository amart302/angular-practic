import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [NgIf, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  password: string = '';
  confirmPassword: string = '';
  check: boolean = false;

  errors: any = {
    password: 'Пароли не совпадают'
  }
}
