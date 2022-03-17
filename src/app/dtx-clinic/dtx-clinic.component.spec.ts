import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtxClinicComponent } from './dtx-clinic.component';

describe('DtxClinicComponent', () => {
  let component: DtxClinicComponent;
  let fixture: ComponentFixture<DtxClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtxClinicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtxClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
