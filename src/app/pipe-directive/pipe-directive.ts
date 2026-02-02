import { Component } from '@angular/core';
import { MaskEmailPipe } from './mask-email-pipe';
import { RequiredStarDirective } from './required-star';

@Component({
  selector: 'app-pipe-directive',
  imports: [MaskEmailPipe,RequiredStarDirective],
  templateUrl: './pipe-directive.html',
  styleUrl: './pipe-directive.css',
})
export class PipeDirective {

}
