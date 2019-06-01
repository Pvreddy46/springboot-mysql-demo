import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private links = new Array<{ text: string, path: string }>();
  private isLoggedIn = new Subject<boolean>();

  constructor() {
    this.addItem({ text: 'Login', path: 'login' });
    this.isLoggedIn.next(false);
  }

  getLinks() {
    return this.links;
  }

  getLoginStatus() {
    return this.isLoggedIn;
  }

  updateLoginStatus(status: boolean) {
    this.isLoggedIn.next(status);

    if (!status) {
      this.clearAllItems();
      this.addItem({ text: 'Login', path: 'login' });
    }
  }

  updateNavAfterAuth(role: string): void {
    this.removeItem({ text: 'Login' });
    this.clearAllItems();

    if (role === 'ROLE_USER') {
      this.addItem({ text: 'Dashboard', path: 'user-dashboard' });
      this.addItem({ text: 'User Reports', path: 'user-report' });
      //this.addItem({ text: 'User List', path: 'userList' });
    } else if (role === 'ROLE_ADMIN') {
      this.addItem({ text: 'Add User', path: 'register' });
      this.addItem({ text: 'Dashboard', path: 'user-dashboard' });
      this.addItem({ text: 'Users List', path: 'userList' });
    }
  }

  addItem({ text, path }) {
    this.links.push({ text: text, path: path });
  }

  removeItem({ text }) {
    this.links.forEach((link, index) => {
      if (link.text === text) {
        this.links.splice(index, 1);
      }
    });
  }

  clearAllItems() {
    this.links.length = 0;
  }
}
