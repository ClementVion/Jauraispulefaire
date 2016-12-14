import { Component, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-artworks-klein',
  templateUrl: 'klein.html'
})

export class ArtworksPageKlein {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {}

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
  signaturePadOptions: Object = {
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

  /**
   * Go to home dialog
   */

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Etes-vous sûr de vouloir quitter ?',
      cssClass: 'customAlert',
      buttons: [
        {
          text: 'Oui',
          cssClass: 'customAlert__buttons customAlert__buttons--yes',
          handler: () => {
            this.navCtrl.pop(ArtworksPageKlein);
          }
        },
        {
          text: 'Non',
          cssClass: 'customAlert__buttons customAlert__buttons--no'
        }
      ]
    });
    confirm.present();
  }

}
