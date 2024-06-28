import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalVaccineDetailsComponent } from './global-vaccine-details.component';

describe('GlobalVaccineDetailsComponent', () => {
  let component: GlobalVaccineDetailsComponent;
  let fixture: ComponentFixture<GlobalVaccineDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlobalVaccineDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlobalVaccineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
