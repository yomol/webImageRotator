import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtxClinicDetectorDeviceComponent } from './dtx-clinic-detector-device.component';

describe('DtxClinicDetectorDeviceComponent', () => {
  let component: DtxClinicDetectorDeviceComponent;
  let fixture: ComponentFixture<DtxClinicDetectorDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtxClinicDetectorDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtxClinicDetectorDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
