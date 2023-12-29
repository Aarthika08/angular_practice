//example of templateUrl and styleurl  with filename type
import { Component } from '@angular/core';

@Component({
  selector: '[app-root]',// attribute
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chainsys';
}
