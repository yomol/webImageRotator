import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { DtxClinicComponent } from './dtx-clinic/dtx-clinic.component';
import { DtxClinicMobileComponent } from './dtx-clinic-mobile/dtx-clinic-mobile.component';
import { DtxClinicDetectorDeviceComponent } from './dtx-clinic-detector-device/dtx-clinic-detector-device.component';
import { DtxClinicSpotsActionComponent } from './dtx-clinic-spots-action/dtx-clinic-spots-action.component';
import { WhiteComponentClinicComponent } from './white-component-clinic/white-component-clinic.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    DtxClinicComponent,
    DtxClinicMobileComponent,
    DtxClinicDetectorDeviceComponent,
    DtxClinicSpotsActionComponent,
    WhiteComponentClinicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
