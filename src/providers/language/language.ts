import { Injectable } from '@angular/core';
import { Globalization } from '@ionic-native/globalization';

/*
  Generated class for the GlobalizationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LanguageProvider {

  constructor(private globalization: Globalization) { }

  getDefaultLanguage() {
    return this.globalization.getPreferredLanguage()
      .then(res => {
        return res.value;
      }
    )
  }

}
