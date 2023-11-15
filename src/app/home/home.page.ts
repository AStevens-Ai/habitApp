import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';
import { CardServiceService, Card } from '../services/card-service.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cards: Card[] = [];

  constructor(private modalCtrl: ModalController,
    private cardService: CardServiceService) { this.cards = this.cardService.getAllCards() }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPagePage,
    })
    modal.present();

    const { data, role } = await modal.onWillDismiss()

    if (role === 'confirm' && data) {
      this.cardService.addCard(data.title, data.description);
      this.cards = this.cardService.getAllCards();
    }
  }
}
