
// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
 <app-attributes-examples></app-attributes-examples>
<app-dropdown
      [options]="dropdownOptions"
      [selectedValue]="selectedDropdownValue"
      (selectedValueChanged)="onDropdownSelectionChange($event)">
    </app-dropdown>
`,
  styles: [`
  div {
    padding: 10px;
    border: 1px solid #ddd;
    margin-bottom: 10px;
  }
`]
})
export class AppComponent {
  isUserLoggedIn = false; // Ensure this property is defined in your component
items=['a','b','c'];
userrole:string="admin";
// index=0;
dropdownOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
];

selectedDropdownValue: any = '';

onDropdownSelectionChange(value: any) {
  console.log('Selected dropdown value:', value);
  // You can perform any actions based on the selected value
}
}
