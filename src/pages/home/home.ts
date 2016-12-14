import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ArtworksPageKlein } from '../artworks/klein/klein';
import { ArtworksPageNewman } from '../artworks/newman/newman';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  goToArtworks(artist) {
    switch(artist) {
      case 'klein':
        this.navCtrl.push(ArtworksPageKlein);
        break;
      case 'newman':
        this.navCtrl.push(ArtworksPageNewman);
        break;
    }
  }

  homeSlideOptions = {
    initialSlide: 0,
    pager: true
  };


}
