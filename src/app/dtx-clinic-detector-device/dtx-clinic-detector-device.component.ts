import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import WR360 from '@webrotate360/imagerotator';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-dtx-clinic-detector-device',
  templateUrl: './dtx-clinic-detector-device.component.html',
  styleUrls: ['./dtx-clinic-detector-device.component.css']
})
export class DtxClinicDetectorDeviceComponent implements OnInit, OnDestroy, AfterViewInit {

  public ismobile: boolean;
  public viewer;
  deviceInfo = null;
  constructor(private deviceService: DeviceDetectorService) {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.ismobile = this.deviceService.isMobile();
  }
  ngAfterViewInit(): void {
    this.ismobile = this.deviceService.isMobile();
  }
  @HostListener("window:resize", [])
  private onResize() {
    if (window.innerWidth < 768) {
      this.ismobile = true;
      this.viewer.settings.graphicsPath = 'https://webrotatorstorage.blob.core.windows.net/webrotator/Mobile/published/imagerotator/html/img/basic';
      this.viewer.reload(
        // XML path to the same or different 360 viewer config xml.
        "https://webrotatorstorage.blob.core.windows.net/webrotator/Mobile/published/360_assets/Mobile/Mobile.xml",
        // Optional RootPath if CDN or Master Config support is used (PRO). Usually null.
        null,
        // Optional callback which is called when reload is complete.
        null,
        // Optional zero-based index of the image to load / show first upon reload (-1 or empty to use config settings).
        //api.images.getCurrentImageIndex(),
        // Reload row index for multi-row 3d views
        //api.images.getCurrentRowIndex());
      );
    } else {
      this.ismobile = false;
      this.viewer.settings.graphicsPath = 'https://webrotatorstorage.blob.core.windows.net/webrotator/360testje/published/imagerotator/html/img/basic';
      this.viewer.reload(
        // XML path to the same or different 360 viewer config xml.
        "https://webrotatorstorage.blob.core.windows.net/webrotator/360testje/published/360_assets/360testje/360testje.xml",
        // Optional RootPath if CDN or Master Config support is used (PRO). Usually null.
        null,
        // Optional callback which is called when reload is complete.
        null,
        // Optional zero-based index of the image to load / show first upon reload (-1 or empty to use config settings).
        //api.images.getCurrentImageIndex(),
        // Reload row index for multi-row 3d views
        //api.images.getCurrentRowIndex());
      );
    }

  }
  ngOnDestroy(): void {
    if (this.viewer)
      this.viewer.delete();
  }
  ngOnInit(): void {


    this.viewer = WR360.ImageRotator.Create('webrotate360DtxClinicDetector');

    this.viewer.licenseCode = 'https://webrotatorstorage.blob.core.windows.net/webrotator/public/license.lic';
    if (this.ismobile) {
      this.viewer.settings.configFileURL = 'https://webrotatorstorage.blob.core.windows.net/webrotator/Mobile/published/360_assets/Mobile/Mobile.xml';
      this.viewer.settings.graphicsPath = 'https://webrotatorstorage.blob.core.windows.net/webrotator/Mobile/published/imagerotator/html/img/basic';
    } else {
      this.viewer.settings.configFileURL = 'https://webrotatorstorage.blob.core.windows.net/webrotator/360testje/published/360_assets/360testje/360testje.xml';
      this.viewer.settings.graphicsPath = 'https://webrotatorstorage.blob.core.windows.net/webrotator/360testje/published/imagerotator/html/img/basic';
    }



    this.viewer.settings.alt = 'Your alt image description';
    //this.viewer.settings.responsiveBaseWidth = 800;
    //this.viewer.settings.responsiveMinHeight = 300;


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