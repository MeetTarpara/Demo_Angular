import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-child-hook',
  imports: [],
  templateUrl: './child-hook.html',
  styleUrl: './child-hook.css',
})
export class ChildHook implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy { 

  @Input() message!: string;

  constructor() {
    console.log('1. Constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges called', changes);
  }

  ngOnInit() {
    console.log('3. ngOnInit called');
  }

  ngDoCheck() {
    console.log('4. ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('5. ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('6. ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('7. ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('8. ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('9. ngOnDestroy called');
  }
}

