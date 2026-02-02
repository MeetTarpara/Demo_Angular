import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './child.html'
})
export class ChildComponent {

  @Input() userName: string = '';
  @Output() statusEvent = new EventEmitter<string>();

  @Output() strmsg = new EventEmitter<string>();

  status = '';
  msg='';
  sendStatus() {
    this.statusEvent.emit(this.status);
    this.strmsg.emit(this.msg);
  }
}
