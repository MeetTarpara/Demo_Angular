
import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map, filter, take, skip, count } from 'rxjs/operators';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-rxjs-demo',
  imports: [CommonModule],
  templateUrl: './rxjs-demo.html',
  styleUrl: './rxjs-demo.css',
})
export class RxjsDemo implements OnInit, OnDestroy {

  numbers: number[] = [];
  subscription!: Subscription;
  subscription2!: Subscription;

  ngOnInit(): void {

    //Custom Observable
    const numberObservable = new Observable<number>(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      observer.next(5);
      observer.next(6);
      observer.complete();
    });

    //pipe with operators
    this.subscription = numberObservable.pipe(
      filter(num => num % 2 === 0),  
      map(num => num * 10),          
      skip(1),                       
      take(3)                       
      ).subscribe({
        next: (value) => {
          
          console.log('Received:', value);
          this.numbers.push(value);
        },
        error: (err) => {
          console.error('Error in Stream', err);
        },
        complete: () => {
          console.log('Stream completed');
        }
    });

    this.subscription2=interval(1000).subscribe({ 
      next: (value) => {
          console.log('Timer:', value);
      }
    });

  }
 

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription2.unsubscribe();
    }
  }
}
