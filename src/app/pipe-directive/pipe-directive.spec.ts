import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDirective } from './pipe-directive';

describe('PipeDirective', () => {
  let component: PipeDirective;
  let fixture: ComponentFixture<PipeDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
