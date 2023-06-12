import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { Component } from "@angular/core";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./auth.component.scss']
})

export class SignupComponent {
  username = '';
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  confirmPassword = '';
  serverError = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const formData = {
      username: this.username,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password
    };
  
    // Password match validation
    if (formData.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    this.authService.signup(formData).subscribe(
      (response: any) => {
        console.log(response);
        alert('You are successfully registered!');
        this.router.navigate(['/user/login']);
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