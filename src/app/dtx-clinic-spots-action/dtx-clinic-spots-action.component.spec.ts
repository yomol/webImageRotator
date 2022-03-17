import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtxClinicSpotsActionComponent } from './dtx-clinic-spots-action.component';

describe('DtxClinicSpotsActionComponent', () => {
  let component: DtxClinicSpotsActionComponent;
  let fixture: ComponentFixture<DtxClinicSpotsActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtxClinicSpotsActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtxClinicSpotsActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
