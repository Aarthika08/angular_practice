import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  heroes = [];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }
}
