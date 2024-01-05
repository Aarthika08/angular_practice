import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [];
  @Output() heroSelected = new EventEmitter<Hero>();

  selectedHero: Hero | undefined; // Add this line

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.heroSelected.emit(hero);
  }
}
