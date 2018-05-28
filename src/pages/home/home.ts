import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrismicProvider } from '../../providers/prismic/prismic';

import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  seasons: any[] = [];
  season: any;
  
  constructor(
    public navCtrl: NavController,
    public prismic: PrismicProvider,
    platform: Platform,
    private admobFree: AdMobFree
  ) {
    this.getSeason();
    this.getCurrentSeason();

    platform.ready().then(() => {
      const bannerConfig: AdMobFreeBannerConfig = {
        // add your config here
        // for the sake of this example we will just use the test config
        id: 'ca-app-pub-5032531825945091/6954605640',
        isTesting: true,
        autoShow: true
      };
      this.admobFree.banner.config(bannerConfig);
      
      this.admobFree.banner.prepare().catch(e => {console.log(e)});
    }).catch(e => {console.log(e)});;
  }

  getSeason(): void {
    this.prismic.getDocumentsByType('season')
    .then(response => {
      this.seasons = response;
    })
    .catch(e => {console.log(e)});
  }

  getCurrentSeason(): void {
    this.prismic.getCurrentSeason()
    .then(response => response[0].data
    )
    .then(data => {
      this.season = data;
    })
    .catch(e => {console.log(e)});
  }

}
