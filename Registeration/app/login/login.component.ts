// login.component.ts
import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  template: `
    <h2>Login</h2>
    <form (ngSubmit)="login()">
      <label>Username: <input [(ngModel)]="username" name="username" required /></label>
      <label>Password: <input type="password" [(ngModel)]="password" name="password" required /></label>
      <button type="submit">Login</button>
    </form>
  `,
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private userService: UserService) {}

  login(): void {
    const success = this.userService.login(this.username, this.password);
    if (success) {
      console.log('Login successful:', this.username);
    } else {
      console.log('Login failed. Please check your credentials.');
    }
  }
}
