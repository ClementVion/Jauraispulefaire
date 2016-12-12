import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ArtworksPage } from '../artworks/artworks';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  goToArtworks() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(ArtworksPage);
  }

}
