import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHttpApiMemComponent } from './my-http-api-mem.component';

describe('MyHttpApiMemComponent', () => {
  let component: MyHttpApiMemComponent;
  let fixture: ComponentFixture<MyHttpApiMemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHttpApiMemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyHttpApiMemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
