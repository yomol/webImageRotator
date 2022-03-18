import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { DtxClinicDetectorDeviceComponent } from './dtx-clinic-detector-device/dtx-clinic-detector-device.component';
import { DtxClinicMobileComponent } from './dtx-clinic-mobile/dtx-clinic-mobile.component';
import { DtxClinicSpotsActionComponent } from './dtx-clinic-spots-action/dtx-clinic-spots-action.component';
import { DtxClinicComponent } from './dtx-clinic/dtx-clinic.component';
import { WhiteComponentClinicComponent } from './white-component-clinic/white-component-clinic.component';

const routes: Routes = [
  { path: 'basic', component: BasicComponent },
  { path: 'dtxclinic', component: DtxClinicComponent },
  { path: 'dtxclinicmobile', component: DtxClinicMobileComponent },
  { path: 'dtxclinicdtectordevice', component: DtxClinicDetectorDeviceComponent },
  { path: 'spotsaction', component: DtxClinicSpotsActionComponent },
  { path: 'whitebackbround', component: WhiteComponentClinicComponent },
  { path: '', redirectTo: '/basic', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
