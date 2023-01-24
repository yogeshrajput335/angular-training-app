import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloadingDemoComponent } from './preloading-demo.component';

describe('PreloadingDemoComponent', () => {
  let component: PreloadingDemoComponent;
  let fixture: ComponentFixture<PreloadingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreloadingDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreloadingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
