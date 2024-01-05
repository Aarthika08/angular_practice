import { Injectable } from '@angular/core';
import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroes: Hero[] = [
    { id: 1, name: 'Iron Man' },
    { id: 2, name: 'Super Man' },
    { id: 3, name: 'Captain America' },
  ];

  getHeroes(): Hero[] {
    return this.heroes;
  }

  getHeroById(id: number): Hero | undefined {
    return this.heroes.find(hero => hero.id === id);
  }
}
