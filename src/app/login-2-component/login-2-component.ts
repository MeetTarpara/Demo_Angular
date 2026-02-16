
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/authService';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login-2-component',
  imports: [FormsModule],
  templateUrl: './login-2-component.html',
  styleUrl: './login-2-component.css',
})
export class Login2Component {

  email: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(private authService: AuthService,
              private router: Router) {}

  onLogin() {
    const loginData = {
      email: this.email,
      password: this.password
    };

    this.authService.login(loginData).subscribe({
      next: (res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('name', res.name);

          console.log(localStorage.getItem('token'));

          this.router.navigate(['/dashboard/form']);
          console.log(loginData);
        }
      },
      error: (err) => {
        this.errorMsg = "Invalid Email or Password";
      }
    });
  }
}
