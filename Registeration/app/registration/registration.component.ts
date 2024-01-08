// registration.component.ts
import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  template: `
    <h2>Registration</h2>
    <form (ngSubmit)="register()">
      <label>Username: <input [(ngModel)]="username" name="username" required /></label>
      <label>Password: <input type="password" [(ngModel)]="password" name="password" required /></label>
      <button type="submit">Register</button>
    </form>
  `,
})
export class RegistrationComponent {
  username = '';
  password = '';

  constructor(private userService: UserService) {}

  register(): void {
    this.userService.register(this.username, this.password);
    console.log('User registered:', this.username);
  }
}
