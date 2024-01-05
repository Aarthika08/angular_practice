#services

In Angular, services are a key building block for building modular and maintainable applications.
Services are used to organize and share code across different components, providing a way to encapsulate and separate concerns.
They promote the principles of modularity, reusability, and dependency injection in Angular applications.

Here is a step-by-step procedure to create and use a service in an Angular application:

1.Create a New Angular Project:
ng new my-angular-app

2.Navigate to the Project Directory:
cd my-angular-app

3.Generate a Service:
ng generate service data

4.Open the Service File and add functionality:

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() { }

  getData(): string {
    return 'Hello from the DataService!';
  }
}


**6.Inject the Service into a Component:**

import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: '<p>{{ message }}</p>',
})
export class AppComponent {
  message: string;

  constructor(private dataService: DataService) {
    this.message = this.dataService.getData();
  }
}


7.Update the Template:
<h1>{{ message }}</h1>

8. run the app
9. ng serve
