import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  transactions: any[] = [];
  typeFilter: string = '';

  constructor(private http: HttpClient) { }

  searchTransactions() {

    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('jwtToken')}`);


    this.http.get<any>(`http://127.0.0.1:8080/transaction/${this.typeFilter}/self`, { headers })
      .subscribe(
        data => {
          console.log(data);
          this.transactions = data.response;
        },
        error => {
          console.error('Error:', error);
        }
      );
  }

  formatDateTime(date: string): string {
    const dateTime = new Date(date);
    return dateTime.toLocaleString();
  }
  
}