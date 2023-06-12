import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public router: Router) {}

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === '1';
  }

  logout() {
    console.log(localStorage.getItem('username'));
    alert('You are successfully logged out!');
    localStorage.setItem('isLoggedIn', '0');
    localStorage.setItem('password', '');
    localStorage.setItem('userId', '');
    localStorage.setItem('username', '');
    this.router.navigate(['/user/login']);
  }
}
