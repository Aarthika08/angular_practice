import { Component } from '@angular/core';

@Component({
  selector: 'app-date-example',
  templateUrl: './date-example.component.html',
  styleUrls: ['./date-example.component.css']
})
export class DateExampleComponent {
  currentDate: Date = new Date();

  // pipe.component.ts
birthday = new Date(2001, 8, 9);

toggle = true;

get format()
{
  return this.toggle ? 'mediumDate' : 'fullDate';
}
toggleFormat()
  {
    this.toggle = !this.toggle;
  }
}
