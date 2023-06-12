import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  fullName: string = '';
  username: string = '';
  email: string = '';
  amount: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.fetchUserProfile();
  }

  fetchUserProfile(): void {
    const jwtToken = localStorage.getItem('jwtToken');
    console.log(jwtToken)

    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    this.http.get<any>('http://127.0.0.1:8080/user/self', { headers })
      .subscribe(
        data => {
          console.log(data);

          this.fullName = `${data.response.firstName} ${data.response.lastName}`;
          
          this.username = data.response.username;
          this.email = data.response.email;
          this.amount = `${data.response.wallet}$`;

          localStorage.setItem('userId', data.response.id);
        },
        error => {
          console.error('Error:', error);
        }
      );
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
