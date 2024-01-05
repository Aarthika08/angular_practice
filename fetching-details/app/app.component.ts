import { Component } from '@angular/core';
import { Hero } from './hero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedHero: Hero | undefined;

  onHeroSelected(hero: Hero): void {
    this.selectedHero = hero;
  }
}
