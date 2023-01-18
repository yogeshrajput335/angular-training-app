import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyObserPromiseComponent } from './my-obser-promise.component';

describe('MyObserPromiseComponent', () => {
  let component: MyObserPromiseComponent;
  let fixture: ComponentFixture<MyObserPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyObserPromiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyObserPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
