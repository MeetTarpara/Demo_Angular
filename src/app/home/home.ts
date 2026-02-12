import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildHook } from "../child-hook/child-hook";


@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, ChildHook],

  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  parentMessage = 'Hello Angular';
  showChild = true;

  changeMessage() {
    this.parentMessage = 'Message Updated!';
  }

  toggle() {
    this.showChild = !this.showChild;
  }
}
