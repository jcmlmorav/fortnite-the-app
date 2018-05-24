import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrismicProvider } from '../../providers/prismic/prismic';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data:any = [];

  constructor(public navCtrl: NavController, public prismic: PrismicProvider) {
    
    this.getData();
    
    
    
  }

  getData(): void {
    this.prismic.getDocuments()
    .then(response => {
      console.log(response.map(data =));
      
    });
  }

}
