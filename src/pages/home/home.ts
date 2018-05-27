import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrismicProvider } from '../../providers/prismic/prismic';
//import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController, public prismic: PrismicProvider) {    
    this.getSeason();            
  }

  seasons:any[] = [];

  getSeason(): void {
    this.prismic.getDocumentsByType('season')
    .then(response => {      
      this.seasons = response;       
    });
  }

}
