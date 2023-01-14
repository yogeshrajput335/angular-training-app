import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLearnComponent } from './my-learn.component';

describe('MyLearnComponent', () => {
  let component: MyLearnComponent;
  let fixture: ComponentFixture<MyLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLearnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
