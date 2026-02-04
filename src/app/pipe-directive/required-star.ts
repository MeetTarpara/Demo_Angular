import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appRequiredStar]'
})
export class RequiredStarDirective implements AfterViewInit {

  constructor(
    private el?: ElementRef,
    private renderer?: Renderer2
  ) {}

  ngAfterViewInit(): void {

    if (!this.el || !this.renderer) return;

   
    const input: HTMLInputElement | null = this.el.nativeElement.querySelector('input[required]');
    if (!input) return; 

   
    const star = this.renderer.createElement('span');
    const text = this.renderer.createText('* ');
    this.renderer.setStyle(star, 'color', 'red');
    this.renderer.setStyle(star, 'font-weight', 'bold');
    this.renderer.appendChild(star, text);

    
    this.renderer.insertBefore(this.el.nativeElement, star, this.el.nativeElement.firstChild);
  }
}
