import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildHook } from './child-hook';

describe('ChildHook', () => {
  let component: ChildHook;
  let fixture: ComponentFixture<ChildHook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildHook]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildHook);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
