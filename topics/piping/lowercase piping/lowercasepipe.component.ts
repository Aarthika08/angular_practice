import { Component } from '@angular/core';

@Component({
  selector: 'app-date-example',
  templateUrl: './lowercasepipe.component.html',
  styleUrls: ['./lowercasepipe.component.css']
})

export class DateExampleComponent {
  currentDate: Date = new Date();
  text="Hello ! Viewer"

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

