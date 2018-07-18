import { Injectable } from '@angular/core';
import Prismic from 'prismic-javascript';
import { LanguageProvider } from '../../providers/language/language';

/*
  Generated class for the PrismicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PrismicProvider  {

  apiEndpoint:string = 'https://fortnite-week-mission-app.cdn.prismic.io/api/v2';
  defaultLang:string;

  constructor(private language: LanguageProvider) {
    this.getDocumentsByDefaultLanguage();
  };

  getDocumentsByType(type:any) {
    return Prismic.getApi(this.apiEndpoint).then((api:any) => {
      return api.query(
        Prismic.Predicates.at('document.type', type),
        {
          lang : this.defaultLang,
          orderings : '[my.season.order desc]'
        }
      );
    }).then(function(response) {
      return response.results;
    }, function(err) {
      console.log("Something went wrong: ", err);
    });
  }

  getCurrentSeason() {
    return Prismic.getApi(this.apiEndpoint).then(function(api:any) {
      return api.query(
        Prismic.Predicates.at('document.type', 'season_to_show'),
        { orderings : '[document.first_publication_date]' }
      );
    }).then(function(response) {
      return response.results;
    }, function(err) {
      console.log("Something went wrong: ", err);
    });
  }

  getDocumentsByDefaultLanguage() {
    this.language.getDefaultLanguage()
    .then((response:any) => {
      switch(response) {
      case 'es-CO':
        this.defaultLang = response;
        break;
      case 'es-ES':
        this.defaultLang = response;
        break;
      case 'en-US':
        this.defaultLang = response;
        break;
      default:
        if(response.split('-')[0] === 'es') {
          this.defaultLang = 'es-CO';            
        } else {
          this.defaultLang = 'en-US';    
        }
      }
    });
  }


}
