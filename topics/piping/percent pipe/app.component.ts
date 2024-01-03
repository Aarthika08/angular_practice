import { Component } from '@angular/core';

@Component({
  selector: 'app-date-example',
  templateUrl: './date-example.component.html',
  styleUrls: ['./date-example.component.css']
})
export class DateExampleComponent {
  currentDate: Date = new Date();
  text="Hello ! Viewer";

  price : number=12345.678;
  selectedCurrency:string='USD';

  inputValue: number = 0.25;

}
