import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  
  getOtp(form: NgForm) {
    console.log('Form Submitted!');
    console.log('Name:', form.value.name);
    console.log('Email:', form.value.email);
    console.log('Full Form Value:', form.value);

    alert("form submitted");
    
  }
}
