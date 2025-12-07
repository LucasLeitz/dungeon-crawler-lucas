import { Component, Input } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {

  @Input() currentHealth: number = 3;
  @Input() maxHealth: number = 3;
  @Input() currentPotions: number = 2;
  @Input() coins: number = 12;

  get heartImage(): string {
    return `/assets/ui/${this.currentHealth}_heart.png`;
  }

  get potionImage(): string {
    return `/assets/ui/${this.currentPotions}_potion.png`;
  }

  get coinImage(): string {
    return `/assets/ui/coin.png`;
  }

}
