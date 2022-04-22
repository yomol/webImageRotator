import { Component, OnDestroy, OnInit } from '@angular/core';
import WR360 from '@webrotate360/imagerotator';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit, OnDestroy {

  public viewerApi;


  ngOnDestroy(): void {
    if (this.viewerApi)
      this.viewerApi.delete();
  }
  ngOnInit(): void {

    this.viewerApi = WR360.ImageRotator.Create('webrotate360');

    this.viewerApi.licenseCode = 'ft0UWBaTn35Kr3HYifPUGPGl589Gxtsj5WpDGZOwJTGShZX+LGrTC7rlgSUlCUO5hg==';
    this.viewerApi.settings.configFileURL = '../../assets/graphics/example2.xml';
    this.viewerApi.settings.graphicsPath = '../../assets/graphics';


    this.viewerApi.settings.alt = 'Your alt image description';
    this.viewerApi.settings.responsiveBaseWidth = 800;
    this.viewerApi.settings.responsiveMinHeight = 300;


    // With a valid license, instead of passing a separate config xml url in "reload" calls below, you can use the second
    // parameter (root path), pointing to a folder with a set of images for selected color / option, while keeping
    // the same config xml url for all options (the first parameter).
    //https://www.webrotate360.com/blog/2013/how-webrotate-support-for-cdn-and-master-config-actually-works.aspx
    this.viewerApi.settings.rootPath = 'https://webstoragecdn.azureedge.net/webrotator/images/';
    this.viewerApi.settings.disableRelativeAssets = false;


    //Just in case we want to modify the xml
    this.viewerApi.settings.configReadyCallback = (xmldoc, isFullScreen) => {
      console.log(xmldoc);
      return xmldoc;
    };
    this.viewerApi.settings.apiReadyCallback = (api, isFullScreen) => {
      console.log(api);
    };

    this.viewerApi.runImageRotator();
  }
}