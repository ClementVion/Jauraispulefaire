import { Component, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ArtworksPageKlein } from '../artworks/klein/klein';
import { ArtworksPageNewman } from '../artworks/newman/newman';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  /**
   * Home main Slide
   */

   homeSlideOptions = {
     direction: "vertical",
     initialSlide: 0,
     onlyExternal: true,
     pager: false
   };

  @ViewChild('homeSlider') slider: Slides;

  goToNextSlide() {
    this.slider.slideNext(300);
  }

  /**
   * Home artworks Slide
   */

  artworksSlideOptions = {
    initialSlide: 0,
    pager: true
  };

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

}
