// src/app/hello.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <h2>{{ greeting }}</h2>
    <input [(ngModel)]="name" placeholder="Enter your name" />
    <button (click)="updateGreeting()">Update Greeting</button>
  `,
})
export class HelloComponent {
  greeting: string = 'Hello, Angular!';
  name: string = '';

  updateGreeting(): void {
    this.greeting = `Hello, ${this.name || 'Angular'}!`;
  }
}
