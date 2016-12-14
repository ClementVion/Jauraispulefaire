import { Component, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-artworks-newman',
  templateUrl: 'newman.html'
})

export class ArtworksPageNewman {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {}

  /**
   * Slider
   */

  @ViewChild('newmanSlider') slider: Slides;

  mySlideOptions = {
    direction: "vertical",
    onlyExternal: true
  };

  goToNextSlide() {
    this.slider.slideNext(300);
  }

  endExperience() {
    this.navCtrl.pop(ArtworksPageNewman);
  }

  /**
   * Go to home dialog
   */

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Etes-vous sûr de vouloir quitter ?',
      cssClass: 'customAlert customAlert--newman',
      buttons: [
        {
          text: 'Oui',
          cssClass: 'customAlert__buttons customAlert__buttons--yes',
          handler: () => {
            this.navCtrl.pop(ArtworksPageNewman);
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

  /**
   * Greetings draw dialog
   */

  showGreetings() {
    let alert = this.alertCtrl.create({
      title: 'Bravo !',
      cssClass:'greetingsDialog',
      subTitle: 'Vous avez restauré la toile !',
      buttons: [
        {
          text: 'Suivant',
          cssClass: 'greetingsDialog__button',
          handler: () => {
            this.goToNextSlide();
          }
        }
      ]
    });
    alert.present();
  }

  /**
   * Canvas
   */

  signature = '';
  isDrawing = false;

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  signaturePadOptions: Object = {
    'minWidth': 20,
    'canvasWidth': 377,
    'canvasHeight': 246,
    'penColor': '#C7B796'
  };

  drawComplete() {
    this.isDrawing = false;
  }

  drawStart() {
    this.isDrawing = true;
  }


}
