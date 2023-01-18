import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHttpRequestEmpComponent } from './my-http-request-emp.component';

describe('MyHttpRequestEmpComponent', () => {
  let component: MyHttpRequestEmpComponent;
  let fixture: ComponentFixture<MyHttpRequestEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHttpRequestEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyHttpRequestEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
