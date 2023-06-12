import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-replenish',
  templateUrl: './replenish.component.html',
  styleUrls: ['./replenish.component.scss']
})
export class ReplenishComponent {
  amount = '';
  balance = '';

  constructor(private router: Router, private http: HttpClient) { }

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
          console.log(data.response);

          this.balance = `${data.response.wallet}$`;
        },
        error => {
          console.error('Error:', error);
        }
      );
  }

  onSubmit() {

    const replenishData = {
      amount: this.amount
    }

    const jwtToken = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);

    this.http.put<any>('http://127.0.0.1:8080/user/replenish', replenishData, { headers })
      .subscribe(
        (data: { response: any; }) => {
          // Handle the response data
          console.log(data);
          alert(data.response);
          this.router.navigate(['/user/profile']);
        },
        (error: any) => {
          console.error('Error:', error);
        }
      );
  }
}




