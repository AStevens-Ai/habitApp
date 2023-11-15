import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {
  title: string[] = [];
  description: string[] = [];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel')
  }

  confirm() {
    const cardData = {
      title: this.title, description: this.description
    }
    return this.modalCtrl.dismiss(cardData, 'confirm')
  }
}
