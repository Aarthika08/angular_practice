// dropdown.component.ts

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  template: `
    <select [ngModel]="selectedValue" (ngModelChange)="onSelectChange($event)">
      <option *ngFor="let option of options" [value]="option.value">{{ option.label }}</option>
    </select>
  `,
})
export class DropdownComponent {
  @Input() options: { label: string, value: any }[] = [];
  @Input() selectedValue: any = '';
  @Output() selectedValueChanged = new EventEmitter<any>();

  onSelectChange(value: any) {
    this.selectedValue = value;
    this.selectedValueChanged.emit(value);
  }
}
