// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   // templateUrl: './app.component.html',

//   template:`<div *ngIf="isUserLoggedIn; else loginmessage">
//   welcome,user
// </div>`,
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'structures';
//   isUserLoggedIn="True";
// }


// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <div *ngIf="isUserLoggedIn; else loginMessage">
      Welcome, User!
    </div>
    <ng-template #loginMessage>
      <div>
        Please log in to access the content.
      </div>
    </ng-template> -->
    <ul> 
      <li *ngFor="let item of items let i=index">
      <!-- {{ item }} -->
      {{ i+1 }}.{{ item }}

</li>
</ul>
      
  `,
})
export class AppComponent {
  isUserLoggedIn = false; // Ensure this property is defined in your component
items=['a','b','c'];
// index=0;
}
