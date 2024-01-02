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
  <div [ngSwitch]="userrole">
<div *ngSwitchCase="'admin'">
Welcome, admin!
</div>
<div *ngSwitchCase="'user'">
Welcome,user!
</div><div *ngSwitchCase="'guest'">
Welcome,guest!
</div>
<div *ngSwitchDefault>
Unknown role.please log in</div></div> 
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
  userrole:string="admin";
}
