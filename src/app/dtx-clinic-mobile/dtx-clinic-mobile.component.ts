import { Component, OnDestroy, OnInit } from '@angular/core';
import WR360 from '@webrotate360/imagerotator';

@Component({
  selector: 'app-dtx-clinic-mobile',
  templateUrl: './dtx-clinic-mobile.component.html',
  styleUrls: ['./dtx-clinic-mobile.component.css']
})
export class DtxClinicMobileComponent implements OnInit, OnDestroy {

  public viewer;


  ngOnDestroy(): void {
    if (this.viewer)
      this.viewer.delete();
  }
  ngOnInit(): void {

    this.viewer = WR360.ImageRotator.Create('webrotate360DtxClinicMobile');

    this.viewer.licenseCode = 'https://webrotatorstorage.blob.core.windows.net/webrotator/public/license.lic';
    this.viewer.settings.configFileURL = 'https://webrotatorstorage.blob.core.windows.net/webrotator/Mobile/published/360_assets/Mobile/Mobile.xml';
    this.viewer.settings.graphicsPath = 'https://webrotatorstorage.blob.core.windows.net/webrotator/Mobile/published/imagerotator/html/img/basic';


    this.viewer.settings.alt = 'Your alt image description';
    //this.viewer.settings.responsiveBaseWidth = 1200;
    //this.viewer.settings.responsiveMinHeight = 600;


    // With a valid license, instead of passing a separate config xml url in "reload" calls below, you can use the second
    // parameter (root path), pointing to a folder with a set of images for selected color / option, while keeping
    // the same config xml url for all options (the first parameter).
    //https://www.webrotate360.com/blog/2013/how-webrotate-support-for-cdn-and-master-config-actually-works.aspx
    this.viewer.settings.rootPath = 'https://webstoragecdn.azureedge.net/webrotator/images/';
    this.viewer.settings.disableRelativeAssets = false;


    //Just in case we want to modify the xml
    this.viewer.settings.configReadyCallback = (xmldoc, isFullScreen) => {
      console.log(xmldoc);
      console.log('dtxclinic');
      return xmldoc;
    };


    this.viewer.runImageRotator();
  }
}