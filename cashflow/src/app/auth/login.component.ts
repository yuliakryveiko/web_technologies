import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { Component } from "@angular/core";

@Component({
  selector: 'app-login',
  templateUrl: '/login.component.html',
  styleUrls: ['./auth.component.scss']
})

export class LoginComponent {
  username = '';
  password = '';
  serverError = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(){
    const loginData = {
        username: this.username,
        password: this.password
      };

    this.authService.login(loginData).subscribe(
        (response: any) => {
          console.log(response);
          alert('You are successfully logged in!');
          console.log(response.access_token)
    
          localStorage.setItem('jwtToken', response.access_token)
          localStorage.setItem('isLoggedIn', '1');
          this.router.navigate(['/user/profile']);
        },
        (error: any) => {
          console.error(error);
          const errorMessage = error.error?.response || 'An error occurred';
          alert(errorMessage);
          this.serverError = errorMessage;
        }
      );
  }
}