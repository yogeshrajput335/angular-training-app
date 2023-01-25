import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRxJsComponent } from './my-rx-js.component';

describe('MyRxJsComponent', () => {
  let component: MyRxJsComponent;
  let fixture: ComponentFixture<MyRxJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRxJsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRxJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
