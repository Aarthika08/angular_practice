import { Component } from '@angular/core';

@Component({
  selector: 'app-attributes-examples',
  // templateUrl: './attributes-examples.component.html'
  template: `
  <div [ngClass]="{'active':isActive,'disabled': isDisabled + 'px'}"> 
  This is the sample of class div
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
  isActive: boolean = true;
  isDisabled: boolean = false;
}
