import { ChangeDetectionStrategy, Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
  firstName = signal("Джабака");
  lastName = signal<string>("Нурмагомедов");
  fullname = linkedSignal({
    source: this.firstName,
    computation:(newOptions, previous) => {
      const fullname = newOptions + " " + this.lastName();
      return fullname;
    }
  })
  courseName: string = "JavaScript";
  number = signal<number>(0);

  constructor(){
    const value = this.firstName();
    setTimeout(() => {
      // debugger;
      this.courseName = "React Js";
      this.firstName.set("Джабраил");
    }, 2000);
    // debugger;
  }

  onIncrement(){
    this.number.update(oldValue => oldValue + 1);
  }
}
