import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AdMobPro } from '@ionic-native/admob-pro';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    platform: Platform,
    private admob: AdMobPro
  ) {
    platform.ready().then(() => {
      var admobid = {
          banner: 'ca-app-pub-5032531825945091/6954605640'
      };

      this.admob.createBanner({
          adId: admobid.banner,
          isTesting: true,
          autoShow: true,
          position: this.admob.AD_POSITION.BOTTOM_CENTER
      });
    });
  }

}
