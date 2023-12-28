// src/app/counter.component.ts
import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <h2>Counter: {{ count }}</h2>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
    </div>
  `,
})
export class CounterComponent {
  count: number;

  constructor(private counterService: CounterService) {
    this.count = this.counterService.getCount();
  }

  increment() {
    this.counterService.increment();
    this.count = this.counterService.getCount();
  }

  decrement() {
    this.counterService.decrement();
    this.count = this.counterService.getCount();
  }
}
