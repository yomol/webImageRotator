import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtxClinicMobileComponent } from './dtx-clinic-mobile.component';

describe('DtxClinicMobileComponent', () => {
  let component: DtxClinicMobileComponent;
  let fixture: ComponentFixture<DtxClinicMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtxClinicMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtxClinicMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
