import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  contactForm!: FormGroup;
 
  constructor(private fb: FormBuilder) {}
 
  ngOnInit(): void {

    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      email: ['', [Validators.required, Validators.email]],
      description: ['', Validators.required]
    });
  }
 
  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Data', this.contactForm.value);
      alert('form is submited')
      
    } else {
      console.error('Form is invalid.');
      this.contactForm.markAllAsTouched();
    }
  }
}


