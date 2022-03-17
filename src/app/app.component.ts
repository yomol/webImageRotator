import { Component, OnDestroy, OnInit } from '@angular/core';
import WR360 from '@webrotate360/imagerotator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  public viewerApi;
  title = 'webImageRotator';


  ngOnDestroy(): void {
    if (this.viewerApi)
      this.viewerApi.delete();
  }
  ngOnInit(): void {

    const viewer = WR360.ImageRotator.Create('webrotate360');

    viewer.licenseCode = 'https://webrotatorstorage.blob.core.windows.net/webrotator/public/license.lic';
    viewer.settings.configFileURL = 'https://webrotatorstorage.blob.core.windows.net/webrotator/public/example/example.xml';
    viewer.settings.graphicsPath = 'https://webrotatorstorage.blob.core.windows.net/webrotator/public/graphics';


    viewer.settings.alt = 'Your alt image description';
    viewer.settings.responsiveBaseWidth = 800;
    viewer.settings.responsiveMinHeight = 300;


    // With a valid license, instead of passing a separate config xml url in "reload" calls below, you can use the second
    // parameter (root path), pointing to a folder with a set of images for selected color / option, while keeping
    // the same config xml url for all options (the first parameter).
    //https://www.webrotate360.com/blog/2013/how-webrotate-support-for-cdn-and-master-config-actually-works.aspx
    viewer.settings.rootPath = 'https://webstoragecdn.azureedge.net/webrotator/images/';
    viewer.settings.disableRelativeAssets = false;


    //Just in case we want to modify the xml
    viewer.settings.configReadyCallback = (xmldoc, isFullScreen) => {
      console.log(xmldoc);
      return xmldoc;
    };


    viewer.runImageRotator();
  }
}
