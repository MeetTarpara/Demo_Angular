import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  imports: [ReactiveFormsModule],
  templateUrl: './form-demo.html',
  styleUrl: './form-demo.css',
})
export class FormDemo {

    isTrue:boolean=true;
  
    userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  
  

    profileForm= new FormGroup({
      name:new FormControl( )
    });

  submitData(){
    console.log(this.profileForm.value);
  }
  onSubmit(){
    console.log(this.userForm.value);
  }

  showButton = true;

  toggleButton() {
    this.showButton = !this.showButton;
  }
}
