
// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
 <p appHighlight [highlightColor]="'lightblue'">Hover over me highlight</p>
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
}
