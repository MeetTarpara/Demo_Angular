
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/authService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-person-component',
  imports: [CommonModule,FormsModule],
  templateUrl: './person-component.html',
  styleUrl: './person-component.css',
})
export class PersonComponent implements OnInit {

  persons: any[] = [];

  constructor(private authService: AuthService) {}


  ngOnInit(): void {
    this.loadPersons();
  }

  loadPersons() {
    this.authService.getPersons().subscribe({
      next: (res) => {
        this.persons = res;
      },
      error: (err) => {
        console.log('Error fetching persons', err);
      }
    });
  }
}
