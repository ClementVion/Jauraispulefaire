import { Component, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-artworks',
  templateUrl: 'artworks.html'
})

export class ArtworksPage {
  @ViewChild('mySlider') slider: Slides;

  constructor(public navCtrl: NavController) {}

  mySlideOptions = {
    direction: "vertical",
  };

  goToNextSlide() {
    this.slider.slideNext(300);
  }

}
