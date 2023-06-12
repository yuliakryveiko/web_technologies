import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent {
  sentToUser = '';
  amount = '';

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    console.log(localStorage.getItem('userId'));
    console.log(this.sentToUser);
    console.log(this.amount);
  
    const transaction = {
      sentByUser: localStorage.getItem('userId'),
      sentToUser: this.sentToUser,
      value: this.amount
    };
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('jwtToken')}`);
  
    this.http.post<any>('http://127.0.0.1:8080/transaction/', transaction, { headers })
      .subscribe(
        data => {
          console.log(data);
          alert("Successful transaction!");
          this.router.navigate(['/user/transactions']);
        },
        error => {
          console.error('Error:', error.error.response);
          alert(error.error.response) // Access the error message
        }
      );
  }
  
}