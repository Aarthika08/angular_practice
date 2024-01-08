// user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: { username: string; password: string }[] = [];

  register(username: string, password: string): void {
    this.users.push({ username, password });
  }

  login(username: string, password: string): boolean {
    const user = this.users.find((u) => u.username === username && u.password === password);
    return !!user;
  }
}
