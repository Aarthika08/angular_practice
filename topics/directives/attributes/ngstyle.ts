import { Component } from '@angular/core';

@Component({
  selector: 'app-attributes-examples',
  // templateUrl: './attributes-examples.component.html'
  template: `
     <div [ngStyle]="{'color':textColor,'font-size': fontSize + 'px'}"> 
  This is the sample of styled div
  </div>
  `  ,
  styles:
  [`
    .active {
      color: green;
      font-weight: bold;
    }
    .disabled {
      color: gray;
      pointer-events: none; /* Disable pointer events for a disabled look */
    }
  `] 
})
export class AttributesExamplesComponent {
  textColor: string = 'blue';
  fontSize: number = 16;
}
