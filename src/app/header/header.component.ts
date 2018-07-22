import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    '../../assets/dist/css/lte.component.css',
    '../../assets/bower_components/bootstrap/dist/css/bootstrap.component.css',
    '../../assets/dist/css/skins/skin-all.component.css',
    './header.component.css',

  ]
})

export class HeaderComponent implements OnInit {

  constructor(@Inject (DOCUMENT) private document) { }

  ngOnInit() {
    // var link1 = this.document.createElement('link');
    // link1.setAttribute('rel','stylesheet');
    // link1.setAttribute('type','text/css');
    // link1.setAttribute('href','/assets/bower_components/bootstrap/dist/css/bootstrap.css');
    // this.document.getElementsByTagName('head')[0].appendChild(link1);

    // var link2 = this.document.createElement('link');
    // link2.setAttribute('rel','stylesheet');
    // link2.setAttribute('type','text/css');
    // link2.setAttribute('href','/assets/bower_components/Ionicons/css/ionicons.min.css');
    // this.document.getElementsByTagName('head')[0].appendChild(link2);

    // var link3 = this.document.createElement('link');
    // link3.setAttribute('rel','stylesheet');
    // link3.setAttribute('type','text/css');
    // link3.setAttribute('href','/assets/dist/css/AdminLTE.min.css');
    // this.document.getElementsByTagName('head')[0].appendChild(link3);

    // var link1 = this.document.createElement('link');
    // link1.setAttribute('rel','stylesheet');
    // link1.setAttribute('type','text/css');
    // link1.setAttribute('href','/assets/dist/css/skins/_all-skins.min.css');
    // this.document.getElementsByTagName('head')[0].appendChild(link1);

  }

}
