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

  getDocumentsByType(type:any) {    	
    return Prismic.getApi(this.apiEndpoint).then(function(api:any) {
      return api.query(
        Prismic.Predicates.at('document.type', type),
        { orderings : '[document.first_publication_date]' }
      );
    }).then(function(response) {          
      return response.results;         
    }, function(err) {
      console.log("Something went wrong: ", err);
    });
  }

}
