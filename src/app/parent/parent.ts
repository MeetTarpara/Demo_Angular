import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child';


@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ChildComponent], 
  templateUrl: './parent.html'
})
export class ParentComponent {

  username = 'Meet';
  childStatus = '';
  childMsg='';
  result='';

  receiveStatus(status: string) {
    this.childStatus = status;
  }

  msgData(msg: string) {
    this.childMsg = msg;
    if(this.childMsg==="meet"){
        this.result="Your answer is correct"
    }
  }
}
