import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TopBarComponent} from './features/hud/top-bar/top-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Dungeon Crawler Lucas';
}
