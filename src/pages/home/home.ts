import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrismicProvider } from '../../providers/prismic/prismic';

import { AdMobPro } from '@ionic-native/admob-pro';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  seasons:any[] = [];
  
  constructor(
    public navCtrl: NavController,
    public prismic: PrismicProvider,
    platform: Platform,
    private admob: AdMobPro
  ) {
    this.getSeason();

    platform.ready().then(() => {
      var admobid = {
          banner: 'ca-app-pub-5032531825945091/6954605640'
      };

      this.admob.createBanner({
          adId: admobid.banner,
          isTesting: false,
          autoShow: true,
          position: this.admob.AD_POSITION.BOTTOM_CENTER
      });
    });
  }

  getSeason(): void {
    this.prismic.getDocumentsByType('season')
    .then(response => {
      this.seasons = response;
    });
  }

}
