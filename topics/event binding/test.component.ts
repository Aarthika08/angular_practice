import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1>
  welcome {{name}}<br>
  <button (click)="handleClick($event)">greet </button><br>
  {{msg}}
  </h1>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent {
public name="aarthika";
public msg='';
constructor(){}
handleClick(event: Event){
  console.log(event.type)
  this.msg="welcome all to the event binding";
}
}
