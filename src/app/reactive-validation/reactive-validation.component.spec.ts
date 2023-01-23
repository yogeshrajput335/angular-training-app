import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveValidationComponent } from './reactive-validation.component';

describe('ReactiveValidationComponent', () => {
  let component: ReactiveValidationComponent;
  let fixture: ComponentFixture<ReactiveValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
