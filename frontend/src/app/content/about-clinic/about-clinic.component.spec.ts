import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutClinicComponent } from './about-clinic.component';

describe('AboutClinicComponent', () => {
  let component: AboutClinicComponent;
  let fixture: ComponentFixture<AboutClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutClinicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
