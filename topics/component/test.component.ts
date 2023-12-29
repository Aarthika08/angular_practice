// example of template inline --component
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1>
  welcome to my page <br>
  </h1> 
  <img src="data:image/png;base64,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" alt="image" />
<br/>
  welcome to abc shop
  <br/>Enteryour username:
  <input [(ngModel)]="name" type="text">
    {{name}}
    <br/>
    enter your password:
    <input [(ngModel)]="password" type="password">
    {{password}}
    <br/>

  <button (click)="handleClick($event)">greet </button><br>
 <p> {{msg}}</p>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent {
public name=" ";
public password=" ";

public msg='';
constructor(){}
handleClick(event: Event){
  console.log(event.type)
  this.msg="This is the example program to implement  component -tempate inline";
}
}