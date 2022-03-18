import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteComponentClinicComponent } from './white-component-clinic.component';

describe('WhiteComponentClinicComponent', () => {
  let component: WhiteComponentClinicComponent;
  let fixture: ComponentFixture<WhiteComponentClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhiteComponentClinicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteComponentClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
