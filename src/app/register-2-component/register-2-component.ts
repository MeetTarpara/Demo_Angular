
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/authService';
import { FormGroup, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register-2-component',
  imports: [FormsModule],
  templateUrl: './register-2-component.html',
  styleUrl: './register-2-component.css',
})
export class Register2Component {

  name: string = '';
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(private authService: AuthService,
              private router: Router) {}

  onRegister() {

    const person = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.authService.register(person).subscribe({
      next: (res) => {
        this.message = "User Registered Successfully";
        
        // redirect to login after 1 sec
        setTimeout(() => {
          this.router.navigate(['login2']);
        }, 1000);
      },
      error: (err) => {
        console.log(err);
        this.message = "Registration Failed";
      }
    });
  }
}
