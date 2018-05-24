import { Injectable } from '@angular/core';
import Prismic from 'prismic-javascript';

/*
  Generated class for the PrismicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PrismicProvider  {

  constructor() {};

  apiEndpoint:string = 'https://fortnite-week-mission-app.cdn.prismic.io/api/v2';

  getDocuments() {    	
    return Prismic.getApi(this.apiEndpoint).then(function(api:any) {
      return api.query(); // An empty query will return all the documents
    }).then(function(response) {          
      return response;         
    }, function(err) {
      console.log("Something went wrong: ", err);
    });
  }

}
