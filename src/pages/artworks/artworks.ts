import { Component, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';


@Component({
  selector: 'page-artworks',
  templateUrl: 'artworks.html'
})

export class ArtworksPage {

  constructor(public navCtrl: NavController) {}

  /**
   * SLIDER
   */

  @ViewChild('mySlider') slider: Slides;

  mySlideOptions = {
    direction: "vertical",
    onlyExternal: true
  };

  goToNextSlide() {
    this.slider.slideNext(300);
  }


  /**
   * CANVAS
   */

  signature = '';
  isDrawing = false;

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  signaturePadOptions: Object = { // Check out https://github.com/szimek/signature_pad
    'minWidth': 40,
    'canvasWidth': 267,
    'canvasHeight': 370,
    'backgroundColor': '#ffffff',
    'penColor': '#0e31b1'
  };

  drawComplete() {
    this.isDrawing = false;
  }

  drawStart() {
    this.isDrawing = true;
  }

}
