import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModalFormComponent } from './my-modal-form.component';

describe('MyModalFormComponent', () => {
  let component: MyModalFormComponent;
  let fixture: ComponentFixture<MyModalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyModalFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
