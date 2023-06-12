import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === '1';
  }

}
