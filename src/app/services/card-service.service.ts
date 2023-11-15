import { Injectable } from '@angular/core';
export interface Card {
  id: number;
  title: string;
  description: string;
}
@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
  private cards: Card[] = [];

  constructor() { }

  addCard(title: string, description: string) {
    const newCard: Card = {
      id: this.cards.length + 1,
      title,
      description
    };
    this.cards.push(newCard);
  }
  getAllCards() {
    return this.cards;
  }
}
