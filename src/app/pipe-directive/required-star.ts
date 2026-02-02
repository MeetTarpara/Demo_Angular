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
    // Exit early if constructor injection failed
    if (!this.el || !this.renderer) return;

    // Find a required input inside this label
    const input: HTMLInputElement | null = this.el.nativeElement.querySelector('input[required]');
    if (!input) return; // exit if no required input

    // Create red * span
    const star = this.renderer.createElement('span');
    const text = this.renderer.createText('* ');
    this.renderer.setStyle(star, 'color', 'red');
    this.renderer.setStyle(star, 'font-weight', 'bold');
    this.renderer.appendChild(star, text);

    // Prepend * before the first child of the label (before the label text)
    this.renderer.insertBefore(this.el.nativeElement, star, this.el.nativeElement.firstChild);
  }
}
